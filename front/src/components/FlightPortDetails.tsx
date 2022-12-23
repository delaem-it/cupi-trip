import { FunctionComponent } from "react";
import styles from "./FlightPortDetails.module.css";

type FlightPortDetailsType = {
  airport?: string;
};

const FlightPortDetails: FunctionComponent<FlightPortDetailsType> = ({
  airport,
}) => {
  return <div className={styles.vKO}>{airport}</div>;
};

export default FlightPortDetails;
