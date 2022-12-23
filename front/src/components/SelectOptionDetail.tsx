import { FunctionComponent } from "react";
import styles from "./SelectOptionDetail.module.css";

type SelectOptionDetailType = {
  value?: string;
  code?: string;
};

const SelectOptionDetail: FunctionComponent<SelectOptionDetailType> = ({
  value,
  code,
}) => {
  return (
    <button className={styles.field}>
      <img
        className={styles.icons20px}
        alt=""
        src="../icons/icons-20px13.svg"
      />
      <div className={styles.subtitleheading}>
        <div className={styles.div}>{value}</div>
        <div className={styles.div1}>Аэропорт Казань, Россия</div>
      </div>
      <div className={styles.rTW}>{code}</div>
    </button>
  );
};

export default SelectOptionDetail;
