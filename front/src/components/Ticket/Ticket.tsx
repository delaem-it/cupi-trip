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

const defaultTicket: ITicket = {
  id: 1,
  price: { value: 9123, currency: 'RUB', symbol: '₽' },
  to: {
    company: { name: 'Nordwind', logo: '../icons/aeroNordwind.svg' },
    routes: [
      {
        from: {
          airport: { name: 'Внуково', code: 'VKO', city: 'Москва' },
          date: 1696223700000,
        },
        to: {
          airport: { name: 'Гагарин', code: 'GSV', city: 'Саратов' },
          date: 1696228500000,
        },
      },
      {
        from: {
          airport: { name: 'Гагарин', code: 'GSV', city: 'Саратов' },
          date: 1696240500000,
        },
        to: {
          airport: { name: 'Казань', code: 'KZN' },
          date: 1696382100000,
        },
        tag: { text: 'Прямой', color: 'success' },
      },
      {
        from: {
          airport: { name: 'Казань', code: 'KZN' },
          date: 1696438100000,
        },
        to: {
          airport: { name: 'Пулково', code: 'LED', city: 'Санкт-Петербург' },
          date: 1696558400000,
        },
      },
    ],
  },
  from: {
    company: { name: 'Победа', logo: '../icons/logo3.svg' },
    routes: [
      {
        from: {
          airport: { name: 'Внуково', code: 'VKO', city: 'Москва' },
          date: 1696223700000,
        },
        to: {
          airport: { name: 'Гагарин', code: 'GSV', city: 'Саратов' },
          date: 1696228500000,
        },
        tag: { text: 'Прямой', color: 'success' },
      },
      {
        from: {
          airport: { name: 'Гагарин', code: 'GSV', city: 'Саратов' },
          date: 1696240500000,
        },
        to: {
          airport: { name: 'Казань', code: 'KZN' },
          date: 1696382100000,
        },
      },
      {
        from: {
          airport: { name: 'Казань', code: 'KZN' },
          date: 1696438100000,
        },
        to: {
          airport: { name: 'Пулково', code: 'LED', city: 'Санкт-Петербург' },
          date: 1696558400000,
        },
      },
    ],
  },
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

const Ticket: FC<TicketType> = ({ ticket = defaultTicket }) => {
  const [showDetails, setShowDetails] = useState(false);

  const summaryTicket = getSummaryTicket(ticket);
  console.log({ summaryTicket });
  const hasDetails = ticket.to.routes.length > 1 || (ticket.from && ticket.from?.routes.length > 1);

  return (
    <div className={styles.ticket}>
      <div className={styles.waytimeavia}>
        <div className={styles.directionTag}>
          <span className={styles.tag}>ТУДА</span>
        </div>
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
