import { FC } from 'react';
import { Airport } from '../../../types/ticket';
import styles from './FlightPortDetails.module.scss';

type FlightPortDetailsType = {
  airport?: Airport | string;
};

const FlightPortDetails: FC<FlightPortDetailsType> = ({ airport }) => {
  if (!airport) return null;

  if (typeof airport === 'string') return <div className={styles.vKO}>{airport}</div>;

  const airportString = airport.city
    ? `${airport.city}, ${airport.name} (${airport.code})`
    : `${airport.name} (${airport.code})`;
  return <div className={styles.port}>{airportString}</div>;
};

export default FlightPortDetails;
