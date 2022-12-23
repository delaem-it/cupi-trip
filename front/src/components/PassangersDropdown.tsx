import { FunctionComponent } from "react";
import NumberInput from "../components/NumberInput";
import TabButtons from "../components/TabButtons";
import styles from "./PassangersDropdown.module.css";

const PassangersDropdown: FunctionComponent = () => {
  return (
    <div className={styles.dropdown}>
      <NumberInput label="Взрослые" description="12 лет и старше" value="1" />
      <NumberInput label="Дети" description="От 2 до 12 лет" value="0" />
      <NumberInput
        label="Младенцы"
        description="До 2 лет, без места"
        value="0"
      />
      <TabButtons />
    </div>
  );
};

export default PassangersDropdown;
