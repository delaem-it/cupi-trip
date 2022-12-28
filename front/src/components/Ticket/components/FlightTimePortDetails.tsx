import { FC } from 'react';
import FlightTimeDetails from '../components/FlightTimeDetails';
import FlightPortDetails from '../components/FlightPortDetails';
import styles from './FlightTimePortDetails.module.scss';
import { Airport } from '../../../types/ticket';

type FlightTimePortDetailsType = {
  timestamp: number;
  airport: Airport | string;
};

const FlightTimePortDetails: FC<FlightTimePortDetailsType> = ({ timestamp, airport }) => {
  return (
    <div className={styles.timesubtitle}>
      <FlightTimeDetails timestamp={timestamp} />
      <FlightPortDetails airport={airport} />
    </div>
  );
};

export default FlightTimePortDetails;
