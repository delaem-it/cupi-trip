import { FunctionComponent } from "react";
import styles from "./MainLogo.module.css";

type MainLogoType = {
  component?: string;
};

const MainLogo: FunctionComponent<MainLogoType> = ({ component }) => {
  return <img className={styles.icon} alt="" src={component} />;
};

export default MainLogo;
