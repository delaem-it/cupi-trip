import { FC, Fragment, useState } from 'react';
import AviacompanyLogo from './components/AviacompanyLogo';
import FlightRoute from './components/FlightRoute';
import FlightTransfer from './components/FlightTransfer';
import Button from '../../components/Button';
import styles from './TicketVariant.module.scss';
import { formatDuartion, formatPrice, getRightEndingTransactions } from '../../utils/formatting';
import { ITicket, Route, Tag, Transaction } from '../../types/ticket';

type TicketType = {
  ticket: ITicket;
};

const defaultTicket: ITicket = {
  price: { value: 9123, currency: 'RUB', symbol: '₽' },
  to: {
    company: { name: 'Nordwind', logo: '../icons/logo2.svg' },
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

const getTransactions = (routes: Route[]) => {
  return routes.reduce((prev: Transaction[], cur: Route, index: number): Transaction[] => {
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
  const toTransactions: Transaction[] = getTransactions(ticket.to.routes);
  const toTagText = toTransactions.length ? `${getRightEndingTransactions(toTransactions.length)}` : undefined;
  const toTag: Tag | undefined = toTransactions.length
    ? {
        text: toTagText || '',
        color: toTransactions.length > 3 ? 'error' : toTransactions.length > 0 ? 'warn' : 'info',
      }
    : undefined;
  const summaryToRoute: Route = {
    from: { ...ticket.to.routes[0].from },
    to: { ...ticket.to.routes[ticket.to.routes.length - 1].to },
    transactions: toTransactions,
    tag: toTag,
  };

  const fromTransactions: Transaction[] = ticket.from ? getTransactions(ticket.from.routes) : [];
  const fromTagText = toTransactions.length ? `${getRightEndingTransactions(toTransactions.length)}` : undefined;
  const fromTag: Tag | undefined = toTransactions.length
    ? {
        text: fromTagText || '',
        color: toTransactions.length > 3 ? 'error' : toTransactions.length > 0 ? 'warn' : 'info',
      }
    : undefined;
  const summaryFromRoute: Route | undefined = ticket.from && {
    from: { ...ticket.from.routes[0].from },
    to: { ...ticket.from.routes[ticket.from.routes.length - 1].to },
    transactions: fromTransactions,
    tag: fromTag,
  };

  const summaryTicket: ITicket = {
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

const TicketVariant: FC<TicketType> = ({ ticket = defaultTicket }) => {
  const [showDetails, setShowDetails] = useState(false);

  const summaryTicket = getSummaryTicket(ticket);
  console.log({ summaryTicket });
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
              const duration = (ticket.to.routes[index].from.date - ticket.to.routes[index - 1].to.date) / 60000;
              transfer = <FlightTransfer duration={formatDuartion(Math.floor(duration))} />;
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

        <div className={styles.directionTag}>
          <span className={styles.tag}>ОБРАТНО</span>
          <hr className={styles.hr} />
        </div>
        {ticket.from ? <AviacompanyLogo company={ticket.from?.company} /> : null}
        {ticket.from && showDetails
          ? ticket.from.routes.map((route, index) => {
              let transfer = null;
              if (index > 0 && ticket.from) {
                const duration = (ticket.to.routes[index].from.date - ticket.to.routes[index - 1].to.date) / 60000;
                transfer = <FlightTransfer duration={formatDuartion(Math.floor(duration))} />;
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
      </div>
      <div className={styles.separator} />
      <div className={styles.priceDetails}>
        <div className={styles.pricebutton}>
          <div className={styles.price}>{formatPrice(ticket.price)}</div>
          <Button>Забронировать</Button>
        </div>
        <Button
          className={styles.expand}
          iconAfter="../icons/icons-16px20.svg"
          variant="text"
          onClick={() => setShowDetails(s => !s)}
        >
          Cкрыть детали
        </Button>
      </div>
    </div>
  );
};

export default TicketVariant;
