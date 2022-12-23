import { FunctionComponent } from "react";
import SelectOption from "../components/SelectOption";
import SelectOptionDetail from "../components/SelectOptionDetail";
import styles from "./AirportSelectDropdown.module.css";

const AirportSelectDropdown: FunctionComponent = () => {
  return (
    <div className={styles.dropdown}>
      <SelectOption
        value="Москва"
        description="Все аэропорты, Россия"
        code="RTW"
      />
      <SelectOptionDetail value="Внуково" code="SVO" />
      <SelectOptionDetail value="Шереметьево" code="VKO" />
      <SelectOptionDetail value="Домодедово" code="DME" />
      <SelectOptionDetail value="Жуковский" code="ZIA" />
      <SelectOption
        fieldDisplay="none"
        value="Магадан"
        description="Россия"
        code="GDX"
      />
      <SelectOption
        fieldDisplay="none"
        value="Магун"
        description="Тайвань"
        code="MZG"
      />
    </div>
  );
};

export default AirportSelectDropdown;
