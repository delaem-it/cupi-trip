import { FunctionComponent } from "react";
import styles from "./Checkbox.module.css";

type CheckboxType = {
  label?: string;
};

const Checkbox: FunctionComponent<CheckboxType> = ({ label }) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.icons20px}>
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.div}>{label}</div>
    </div>
  );
};

export default Checkbox;
