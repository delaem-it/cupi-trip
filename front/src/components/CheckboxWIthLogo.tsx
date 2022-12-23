import { FunctionComponent } from "react";
import styles from "./CheckboxWIthLogo.module.css";

type CheckboxWIthLogoType = {
  logo?: string;
  label?: string;
};

const CheckboxWIthLogo: FunctionComponent<CheckboxWIthLogoType> = ({
  logo,
  label,
}) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.icons20px}>
        <div className={styles.rectangleDiv} />
      </div>
      <img className={styles.logoIcon} alt="" src={logo} />
      <div className={styles.div}>{label}</div>
    </div>
  );
};

export default CheckboxWIthLogo;
