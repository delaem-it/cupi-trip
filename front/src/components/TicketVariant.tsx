import { FunctionComponent } from 'react';
import AviacompanyLogo from '../components/AviacompanyLogo';
import FlightRoute from '../components/FlightRoute';
import FlightTransfer from '../components/FlightTransfer';
import Button from '../components/Button';
import ButtonWithIconAfter from '../components/ButtonWithIconAfter';
import styles from './TicketVariant.module.css';

const TicketVariant: FunctionComponent = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.waytimeavia}>
        <AviacompanyLogo logo="../icons/logo2.svg" companyName="Nordwind" />
        <FlightRoute />
        <FlightTransfer duation="13 ч 24 мин" />
        <FlightRoute />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.pricedetailsButton}>
        <div className={styles.pricebutton}>
          <div className={styles.div}>9 985 ₽</div>
          <Button>Забронировать</Button>
        </div>
        <ButtonWithIconAfter reviewText="Cкрыть детали" icons16px="../icons/icons-16px20.svg" />
        <Button iconAfter="../icons/icons-16px20.svg" variant="text">
          Cкрыть детали
        </Button>
      </div>
    </div>
  );
};

export default TicketVariant;
