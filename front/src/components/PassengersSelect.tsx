import { FunctionComponent } from "react";
import Select from "../components/Select";
import PassangersDropdown from "../components/PassangersDropdown";
import styles from "./PassengersSelect.module.css";

const PassengersSelect: FunctionComponent = () => {
  return (
    <div className={styles.field}>
      <Select
        label="Пассажиры, класс"
        value="1 пассажир"
        fieldBorder="2px solid var(--blue-007aff)"
        fieldBorderRadius="0px var(--br-md) var(--br-md) 0px"
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
      <PassangersDropdown />
    </div>
  );
};

export default PassengersSelect;
