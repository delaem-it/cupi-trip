import { FC } from 'react';
import styles from './FlightTransfer.module.scss';

type FlightTransferType = {
  duration?: string;
};

const FlightTransfer: FC<FlightTransferType> = ({ duration }) => {
  if (!duration) return null;
  return (
    <div className={styles.iconheading}>
      <img className={styles.icons16px} alt="" src="../icons/icons-16px19.svg" />
      <div className={styles.div}>Пересадка</div>
      <div className={styles.div1}>{duration}</div>
    </div>
  );
};

export default FlightTransfer;
