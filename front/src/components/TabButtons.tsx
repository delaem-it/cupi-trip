import { FunctionComponent } from "react";
import styles from "./TabButtons.module.css";

const TabButtons: FunctionComponent = () => {
  return (
    <div className={styles.tabButtons}>
      <button className={styles.tabs}>
        <div className={styles.div}>Эконом</div>
      </button>
      <button className={styles.tabs1}>
        <div className={styles.div1}>Бизнес</div>
      </button>
    </div>
  );
};

export default TabButtons;
