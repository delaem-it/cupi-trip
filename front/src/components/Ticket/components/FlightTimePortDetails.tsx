import { FC } from 'react';
import FlightTimeDetails from '../components/FlightTimeDetails';
import FlightPortDetails from '../components/FlightPortDetails';
import styles from './FlightTimePortDetails.module.scss';
import { Airport } from '../../../types/ticket';

type FlightTimePortDetailsType = {
  date?: string;
  time?: string;
  timestamp?: number;
  airport?: Airport | string;
};

const FlightTimePortDetails: FC<FlightTimePortDetailsType> = ({ date, time, timestamp, airport }) => {
  return (
    <div className={styles.timesubtitle}>
      <FlightTimeDetails timestamp={timestamp} time={time} date={date} />
      <FlightPortDetails airport={airport} />
    </div>
  );
};

export default FlightTimePortDetails;
