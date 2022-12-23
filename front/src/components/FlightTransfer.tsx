import { FunctionComponent } from "react";
import styles from "./FlightTransfer.module.css";

type FlightTransferType = {
  duation?: string;
};

const FlightTransfer: FunctionComponent<FlightTransferType> = ({ duation }) => {
  return (
    <div className={styles.iconheading}>
      <img
        className={styles.icons16px}
        alt=""
        src="../icons/icons-16px19.svg"
      />
      <div className={styles.div}>Пересадка</div>
      <div className={styles.div1}>{duation}</div>
    </div>
  );
};

export default FlightTransfer;
