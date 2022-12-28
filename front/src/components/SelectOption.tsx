import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SelectOption.module.css";

type SelectOptionType = {
  value?: string;
  description?: string;
  code?: string;

  /** Style props */
  fieldDisplay?: Property.Display;
};

const SelectOption: FunctionComponent<SelectOptionType> = ({
  fieldDisplay,
  value,
  description,
  code,
}) => {
  const field3Style: CSS.Properties = useMemo(() => {
    return {
      display: fieldDisplay,
    };
  }, [fieldDisplay]);

  return (
    <button className={styles.field} style={field3Style}>
      <div className={styles.subtitleheading}>
        <div className={styles.div}>{value}</div>
        <div className={styles.div1}>{description}</div>
      </div>
      <div className={styles.rTW}>{code}</div>
    </button>
  );
};

export default SelectOption;
