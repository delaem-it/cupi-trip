import { FC } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './FlightTimeDetails.module.scss';

type FlightTimeDetailsType = {
  timestamp: number;
};

const FlightTimeDetails: FC<FlightTimeDetailsType> = ({ timestamp }) => {
  const timeString = format(timestamp, 'hh:mm');
  const dateString = format(timestamp, 'dd MMMM, eeeeee', { locale: ru });

  return (
    <div className={styles.frameDiv}>
      <div className={styles.div}>{dateString}</div>
      <span className={styles.span}>{timeString}</span>
    </div>
  );
};

export default FlightTimeDetails;
