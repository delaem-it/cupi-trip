import { FunctionComponent } from "react";
import Select from "../components/Select";
import CalendarDropdown from "../components/CalendarDropdown";
import styles from "./CalendarSelect.module.css";

const CalendarSelect: FunctionComponent = () => {
  return (
    <div className={styles.field}>
      <Select
        label="Дата туда"
        value="23 мая"
        fieldBorder="2px solid var(--blue-007aff)"
        fieldBorderRadius="unset"
        fieldCursor="unset"
        fieldFlex="unset"
        fieldAlignSelf="stretch"
        fieldOverflow="hidden"
        fieldZIndex="0"
        subtitleheadingOverflow="unset"
        subtitleheadingWhiteSpace="unset"
        subtitleheadingTextOverflow="unset"
        componentAlignSelf="stretch"
        componentWhiteSpace="unset"
        componentOverflow="unset"
        componentTextOverflow="unset"
        componentAlignSelf1="stretch"
        icons16px="../icons/icons-16px40.svg"
      />
      <CalendarDropdown />
    </div>
  );
};

export default CalendarSelect;
