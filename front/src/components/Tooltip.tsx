import { FunctionComponent } from "react";
import styles from "./Tooltip.module.css";

const Tooltip: FunctionComponent = () => {
  return (
    <div className={styles.tagTransfer}>
      <div className={styles.price}>
        <div className={styles.div}>
          <p className={styles.p}>
            <span>Пересадка,</span>
          </p>
          <p className={styles.p}>
            <b>Саратов (GSV)</b>
          </p>
          <p className={styles.p1}>
            <span>13ч 12 мин</span>
          </p>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="../icons/vector-167.svg" />
    </div>
  );
};

export default Tooltip;
