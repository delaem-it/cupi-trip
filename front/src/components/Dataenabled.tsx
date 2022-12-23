import { FunctionComponent } from "react";
import styles from "./Dataenabled.module.css";

type DataenabledType = {
  calendarnumber?: string;
};

const Dataenabled: FunctionComponent<DataenabledType> = ({
  calendarnumber,
}) => {
  return (
    <div className={styles.div}>
      <div className={styles.div1}>{calendarnumber}</div>
    </div>
  );
};

export default Dataenabled;
