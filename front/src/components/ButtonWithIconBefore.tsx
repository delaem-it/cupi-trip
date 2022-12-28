import { FunctionComponent } from "react";
import styles from "./ButtonWithIconBefore.module.css";

type ButtonWithIconBeforeType = {
  icons16px?: string;
  text?: string;
};

const ButtonWithIconBefore: FunctionComponent<ButtonWithIconBeforeType> = ({
  icons16px,
  text,
}) => {
  return (
    <button className={styles.arrowFuther}>
      <img className={styles.icons16px} alt="" src={icons16px} />
      <span className={styles.reviewText}>{text}</span>
    </button>
  );
};

export default ButtonWithIconBefore;
