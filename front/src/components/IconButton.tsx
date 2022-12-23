import { FunctionComponent } from "react";
import styles from "./IconButton.module.css";

type IconButtonType = {
  icon?: string;
};

const IconButton: FunctionComponent<IconButtonType> = ({ icon }) => {
  return (
    <button className={styles.iconButton}>
      <img className={styles.icons20px} alt="" src={icon} />
    </button>
  );
};

export default IconButton;
