import { FunctionComponent } from "react";
import FlightTimeDetails from "../components/FlightTimeDetails";
import FlightPortDetails from "../components/FlightPortDetails";
import styles from "./FlightTimePortDetails.module.css";

type FlightTimePortDetailsType = {
  date?: string;
  time?: string;
  airport?: string;
};

const FlightTimePortDetails: FunctionComponent<FlightTimePortDetailsType> = ({
  date,
  time,
  airport,
}) => {
  return (
    <div className={styles.timesubtitle}>
      <FlightTimeDetails time={time} date={date} />
      <FlightPortDetails airport={airport} />
    </div>
  );
};

export default FlightTimePortDetails;
