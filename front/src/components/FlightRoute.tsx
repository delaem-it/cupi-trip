import { FunctionComponent } from "react";
import FlightTimePortDetails from "../components/FlightTimePortDetails";
import FlightArrow from "../components/FlightArrow";
import FlightDuration from "../components/FlightDuration";
import FlightTag from "../components/FlightTag";
import styles from "./FlightRoute.module.css";

type FlightRouteType = {
  dateFrom?: string;
  timeFrom?: string;
  airportFrom?: string;
};

const FlightRoute: FunctionComponent<FlightRouteType> = ({
  dateFrom,
  timeFrom,
  airportFrom,
}) => {
  return (
    <div className={styles.waytime}>
      <div className={styles.way}>
        <FlightTimePortDetails
          date={dateFrom}
          time={timeFrom}
          airport={airportFrom}
        />
        <FlightArrow />
        <FlightTimePortDetails
          date={dateFrom}
          time={timeFrom}
          airport={airportFrom}
        />
      </div>
      <div className={styles.timestatus}>
        <FlightDuration duration="10 ч 31 мин" />
        <FlightTag tag="Прямой" />
      </div>
    </div>
  );
};

export default FlightRoute;
