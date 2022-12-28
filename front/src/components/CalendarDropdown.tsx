import { FunctionComponent } from "react";
import CalendarDropdownMonth1 from "../components/CalendarDropdownMonth1";
import CalendarDropdownMonth2 from "../components/CalendarDropdownMonth2";
import styles from "./CalendarDropdown.module.css";

const CalendarDropdown: FunctionComponent = () => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.data}>
        <CalendarDropdownMonth1 />
        <CalendarDropdownMonth2 />
      </div>
    </div>
  );
};

export default CalendarDropdown;
