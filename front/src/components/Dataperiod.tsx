import { FunctionComponent } from "react";
import styles from "./Dataperiod.module.css";

type DataperiodType = {
  calendarnumber?: string;
};

const Dataperiod: FunctionComponent<DataperiodType> = ({ calendarnumber }) => {
  return (
    <button className={styles.button}>
      <div className={styles.div}>{calendarnumber}</div>
    </button>
  );
};

export default Dataperiod;
