import { FunctionComponent } from "react";
import styles from "./AviacompanyLogo.module.css";

type AviacompanyLogoType = {
  logo?: string;
  companyName?: string;
};

const AviacompanyLogo: FunctionComponent<AviacompanyLogoType> = ({
  logo = "../icons/logo.svg",
  companyName,
}) => {
  return (
    <div className={styles.avia}>
      <img className={styles.logoIcon} alt="" src={logo} />
      <div className={styles.div}>{companyName}</div>
    </div>
  );
};

export default AviacompanyLogo;
