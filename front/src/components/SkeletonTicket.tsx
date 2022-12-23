import { FunctionComponent } from "react";
import styles from "./SkeletonTicket.module.css";

const SkeletonTicket: FunctionComponent = () => {
  return (
    <div className={styles.preoladerTickets}>
      <div className={styles.waytimeavia}>
        <div className={styles.avia} />
        <div className={styles.waytime} />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.pricebutton}>
        <div className={styles.price} />
        <div className={styles.price1} />
      </div>
    </div>
  );
};

export default SkeletonTicket;
