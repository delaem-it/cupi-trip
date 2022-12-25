import { FC } from 'react';
import styles from './FlightArrow.module.css';

const FlightArrow: FC = () => {
  return (
    <div className={styles.line}>
      <img className={styles.vectorIcon} alt="" src="../icons/vector-272.svg" />
      <img className={styles.vectorIcon1} alt="" src="../icons/vector-271.svg" />
    </div>
  );
};

export default FlightArrow;
