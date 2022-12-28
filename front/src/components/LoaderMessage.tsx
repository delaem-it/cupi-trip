import { FunctionComponent } from "react";
import InfoMessage from "../components/InfoMessage";
import styles from "./LoaderMessage.module.css";

const LoaderMessage: FunctionComponent = () => {
  return (
    <div className={styles.iconheading}>
      <InfoMessage
        title="Ищем для вас лучшие билеты!"
        subtitle="Пожалуйста, подождите........"
      />
      <div className={styles.slider}>
        <div className={styles.rectangleDiv} />
      </div>
    </div>
  );
};

export default LoaderMessage;
