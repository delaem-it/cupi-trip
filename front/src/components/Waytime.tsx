import { FunctionComponent } from "react";
import FlightTimePortDetails from "../components/FlightTimePortDetails";
import FlightDuration from "../components/FlightDuration";
import FlightTag from "../components/FlightTag";
import styles from "./Waytime.module.css";

type WaytimeType = {
  dateFrom?: string;
  timeFrom?: string;
  airportFrom?: string;
  dateTo?: string;
  timeTo?: string;
  airportTo?: string;
  duration?: string;
  tag?: string;
};

const Waytime: FunctionComponent<WaytimeType> = ({
  dateFrom,
  timeFrom,
  airportFrom,
  dateTo,
  timeTo,
  airportTo,
  duration,
  tag,
}) => {
  return (
    <div className={styles.waytime}>
      <div className={styles.way}>
        <FlightTimePortDetails
          date={dateFrom}
          time={timeFrom}
          airport={airportFrom}
        />
        <div className={styles.line}>
          <img
            className={styles.vectorIcon}
            alt=""
            src="../icons/vector-2721.svg"
          />
          <div className={styles.pointTransfer}>
            <div className={styles.tagTransfer}>
              <div className={styles.price}>
                <div className={styles.div}>от 600 ₽</div>
              </div>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="../icons/vector-167.svg"
              />
            </div>
            <img
              className={styles.pointTransferIcon}
              alt=""
              src="../icons/point-transfer.svg"
            />
          </div>
          <img
            className={styles.vectorIcon2}
            alt=""
            src="../icons/vector-2711.svg"
          />
        </div>
        <FlightTimePortDetails
          date={dateTo}
          time={timeTo}
          airport={airportTo}
        />
      </div>
      <div className={styles.timestatus}>
        <FlightDuration duration={duration} />
        <FlightTag tag={tag} componentColor="var(--orange-ffa620)" />
      </div>
    </div>
  );
};

export default Waytime;
