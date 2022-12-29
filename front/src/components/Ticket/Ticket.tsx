import { FC, Fragment, useState } from 'react';
import clsx from 'clsx';
import { intervalToDuration } from 'date-fns';

import AviacompanyLogo from './components/AviacompanyLogo';
import FlightRoute from './components/FlightRoute';
import FlightTransfer from './components/FlightTransfer';
import Button from '../Button';
import styles from './Ticket.module.scss';
import { formatDuration, formatPrice, getRightEndingTransfers } from '../../utils/formatting';
import { ITicket, Route, Tag, Transfer } from '../../types/ticket';

type TicketType = {
  ticket: ITicket;
};

const getTransfers = (routes: Route[]) => {
  return routes.reduce((prev: Transfer[], cur: Route, index: number): Transfer[] => {
    if (index === 0) return prev;
    const duration = (routes[index].from.date - routes[index - 1].to.date) / 60000;
    return [
      ...prev,
      {
        airport: cur.from.airport,
        duration: duration,
      },
    ];
  }, []);
};

const getSummaryTicket = (ticket: ITicket): ITicket => {
  const toTransfers: Transfer[] = getTransfers(ticket.to.routes);
  const toTagText = toTransfers.length ? `${getRightEndingTransfers(toTransfers.length)}` : undefined;
  const toTag: Tag | undefined = toTransfers.length
    ? {
        text: toTagText || '',
        color: toTransfers.length > 3 ? 'error' : toTransfers.length > 0 ? 'warn' : 'info',
      }
    : undefined;
  const summaryToRoute: Route = {
    from: { ...ticket.to.routes[0].from },
    to: { ...ticket.to.routes[ticket.to.routes.length - 1].to },
    transfers: toTransfers,
    tag: toTag,
  };

  const fromTransfers: Transfer[] = ticket.from ? getTransfers(ticket.from.routes) : [];
  const fromTagText = toTransfers.length ? `${getRightEndingTransfers(toTransfers.length)}` : undefined;
  const fromTag: Tag | undefined = toTransfers.length
    ? {
        text: fromTagText || '',
        color: toTransfers.length > 3 ? 'error' : toTransfers.length > 0 ? 'warn' : 'info',
      }
    : undefined;
  const summaryFromRoute: Route | undefined = ticket.from && {
    from: { ...ticket.from.routes[0].from },
    to: { ...ticket.from.routes[ticket.from.routes.length - 1].to },
    transfers: fromTransfers,
    tag: fromTag,
  };

  const summaryTicket: ITicket = {
    id: 1,
    price: ticket.price,
    to: {
      routes: [summaryToRoute],
      company: ticket.to.company,
    },
    from: ticket.from &&
      summaryFromRoute && {
        routes: [summaryFromRoute],
        company: ticket.from?.company,
      },
  };

  return summaryTicket;
};

const Ticket: FC<TicketType> = ({ ticket }) => {
  const [showDetails, setShowDetails] = useState(false);

  const summaryTicket = getSummaryTicket(ticket);
  const hasDetails = ticket.to.routes.length > 1 || (ticket.from && ticket.from?.routes.length > 1);

  return (
    <div className={styles.ticket}>
      <div className={styles.waytimeavia}>
        {ticket.from && (
          <div className={styles.directionTag}>
            <span className={styles.tag}>ТУДА</span>
          </div>
        )}
        <AviacompanyLogo company={ticket.to.company} />
        {showDetails ? (
          ticket.to.routes.map((route, index) => {
            let transfer = null;
            if (index > 0) {
              const duration = intervalToDuration({
                end: ticket.to.routes[index].from.date,
                start: ticket.to.routes[index - 1].to.date,
              });
              transfer = <FlightTransfer duration={formatDuration(duration)} />;
            }
            return (
              <Fragment key={index}>
                {transfer}
                <FlightRoute route={route} />
              </Fragment>
            );
          })
        ) : (
          <FlightRoute route={summaryTicket.to.routes[0]} />
        )}
        {ticket.from ? (
          <>
            <div className={styles.directionTag}>
              <span className={styles.tag}>ОБРАТНО</span>
              <hr className={styles.hr} />
            </div>
            <AviacompanyLogo company={ticket.from?.company} />
            {showDetails
              ? ticket.from.routes.map((route, index) => {
                  let transfer = null;
                  if (index > 0 && ticket.from) {
                    const duration = intervalToDuration({
                      end: ticket.to.routes[index].from.date,
                      start: ticket.to.routes[index - 1].to.date,
                    });
                    transfer = <FlightTransfer duration={formatDuration(duration)} />;
                  }
                  return (
                    <Fragment key={index}>
                      {transfer}
                      <FlightRoute route={route} />
                    </Fragment>
                  );
                })
              : null}
            {!showDetails ? <FlightRoute route={summaryTicket.from?.routes[0]} /> : null}
          </>
        ) : null}
      </div>
      <div className={styles.separator} />
      <div className={styles.priceDetails}>
        <div className={styles.pricebutton}>
          <div className={styles.price}>{formatPrice(ticket.price)}</div>
          <Button>Забронировать</Button>
        </div>
        {hasDetails && (
          <Button
            className={clsx(styles.expand, showDetails ? '' : styles.invert)}
            iconAfter="../icons/iconChevron.svg"
            variant="text"
            onClick={() => setShowDetails(s => !s)}
          >
            {showDetails ? 'Скрыть детали' : 'Детали перелета'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Ticket;
