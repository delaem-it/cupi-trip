import { FunctionComponent } from "react";
import CheckboxWIthLogo from "../components/CheckboxWIthLogo";
import Checkbox from "../components/Checkbox";
import styles from "./FilterCompanies.module.css";

const FilterCompanies: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div className={styles.div}>Авиакомпании</div>
        <img
          className={styles.icons16px}
          alt=""
          src="../icons/icons-16px11.svg"
        />
      </div>
      <div className={styles.filterLists}>
        <div className={styles.list}>
          <CheckboxWIthLogo logo="../icons/logo.svg" label="Победа" />
          <CheckboxWIthLogo logo="../icons/logo1.svg" label="S7 Airlines" />
          <CheckboxWIthLogo logo="../icons/logo2.svg" label="Nordwind" />
          <CheckboxWIthLogo
            logo="../icons/logo3.svg"
            label="Turkish airlines"
          />
          <CheckboxWIthLogo logo="../icons/logo4.svg" label="SAS" />
          <CheckboxWIthLogo logo="../icons/logo5.svg" label="Qatar Airways" />
          <CheckboxWIthLogo logo="../icons/logo6.svg" label="Lufthansa" />
          <Checkbox label="2 пересадки" />
          <Checkbox label="3 пересадки" />
          <Checkbox label="4 пересадки" />
        </div>
        <div className={styles.slider}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.rectangleDiv1} />
    </div>
  );
};

export default FilterCompanies;
