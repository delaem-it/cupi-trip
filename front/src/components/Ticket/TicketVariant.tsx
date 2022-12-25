import { FC } from 'react';
import AviacompanyLogo from './components/AviacompanyLogo';
import FlightRoute from './components/FlightRoute';
import FlightTransfer from './components/FlightTransfer';
import Button from '../../components/Button';
import styles from './TicketVariant.module.scss';
import { formatDuartion, formatPrice } from '../../utils/formatting';
import { ITicket } from '../../types/ticket';

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
        tag: 'Прямой',
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
        tag: 'Прямой',
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
        tag: 'Прямой',
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

const TicketVariant: FC<TicketType> = ({ ticket = defaultTicket }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.waytimeavia}>
        <div className={styles.directionTag}>
          <span className={styles.tag}>ТУДА</span>
        </div>
        <AviacompanyLogo company={ticket.to.company} />
        {ticket.to.routes.map((route, index) => {
          let transfer = null;
          if (index > 0) {
            const duration = ticket.to.routes[index].from.date - ticket.to.routes[index - 1].to.date;
            transfer = <FlightTransfer duration={formatDuartion(Math.floor(duration / 60000))} />;
          }
          return (
            <>
              {transfer}
              <FlightRoute route={route} />
            </>
          );
        })}

        <div className={styles.directionTag}>
          <span className={styles.tag}>ОБРАТНО</span>
          <hr className={styles.hr} />
        </div>
        {ticket.from ? <AviacompanyLogo company={ticket.from?.company} /> : null}
        {ticket.from
          ? ticket.from.routes.map((route, index) => {
              let transfer = null;
              if (index > 0 && ticket.from) {
                const duration = ticket.from.routes[index].from.date - ticket.from.routes[index - 1].from.date;
                transfer = <FlightTransfer duration={formatDuartion(duration / 60000)} />;
              }
              return (
                <>
                  {transfer}
                  <FlightRoute route={route} />
                </>
              );
            })
          : null}
      </div>
      <div className={styles.separator} />
      <div className={styles.priceDetails}>
        <div className={styles.pricebutton}>
          <div className={styles.price}>{formatPrice(ticket.price)}</div>
          <Button>Забронировать</Button>
        </div>
        <Button className={styles.expand} iconAfter="../icons/icons-16px20.svg" variant="text">
          Cкрыть детали
        </Button>
      </div>
    </div>
  );
};

export default TicketVariant;
