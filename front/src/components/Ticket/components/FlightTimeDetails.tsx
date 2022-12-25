import { FC, useMemo } from 'react';
import CSS, { Property } from 'csstype';
import styles from './FlightTimeDetails.module.scss';

type FlightTimeDetailsType = {
  time?: string;
  date?: string;
  timestamp?: number;
};

const FlightTimeDetails: FC<FlightTimeDetailsType> = ({ time, date, timestamp }) => {
  const timeString = timestamp ? new Date(timestamp).toLocaleTimeString('ru').substring(0, 5) : time;
  const dateArray = timestamp ? new Date(timestamp).toDateString().split(' ') : null;
  const dateString = dateArray ? `${dateArray[2]} ${dateArray[1]}, ${dateArray[0]}` : date;

  return (
    <div className={styles.frameDiv}>
      <div className={styles.div}>{dateString}</div>
      <span className={styles.span}>{timeString}</span>
    </div>
  );
};

export default FlightTimeDetails;
