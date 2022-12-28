import { FunctionComponent } from "react";
import styles from "./FlightDuration.module.css";

type FlightDurationType = {
  duration?: string;
};

const FlightDuration: FunctionComponent<FlightDurationType> = ({
  duration,
}) => {
  return <div className={styles.div}>{duration}</div>;
};

export default FlightDuration;
