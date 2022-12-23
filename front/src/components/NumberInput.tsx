import { FunctionComponent } from "react";
import styles from "./NumberInput.module.css";

type NumberInputType = {
  label?: string;
  description?: string;
  value?: string;
};

const NumberInput: FunctionComponent<NumberInputType> = ({
  label,
  description,
  value,
}) => {
  return (
    <div className={styles.passengers}>
      <div className={styles.field}>
        <div className={styles.subtitleheading}>
          <div className={styles.div}>{label}</div>
          <div className={styles.div1}>{description}</div>
        </div>
      </div>
      <div className={styles.quantity}>
        <button className={styles.scrollArrow}>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px41.svg"
          />
        </button>
        <div className={styles.div2}>{value}</div>
        <button className={styles.scrollArrow}>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px42.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
