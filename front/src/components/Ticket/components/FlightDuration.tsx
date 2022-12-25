import { FC } from 'react';
import styles from './FlightDuration.module.scss';

type FlightDurationType = {
  duration?: string;
};

const FlightDuration: FC<FlightDurationType> = ({ duration }) => {
  return <div className={styles.div}>{duration}</div>;
};

export default FlightDuration;
