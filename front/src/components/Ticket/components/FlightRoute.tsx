import { FC } from 'react';
import styles from './FlightRoute.module.scss';
import { Route } from '../../../types/ticket';
import FlightTimePortDetails from '../components/FlightTimePortDetails';
import FlightArrow from '../components/FlightArrow';
import FlightDuration from '../components/FlightDuration';
import FlightTag from '../components/FlightTag';
import { formatDuartion } from '../../../utils/formatting';

type FlightRouteType = {
  dateFrom?: string;
  timeFrom?: string;
  airportFrom?: string;
  dateTo?: string;
  timeTo?: string;
  airportTo?: string;
  duration?: number;
  tag?: string;
  route?: Route;
};

const FlightRoute: FC<FlightRouteType> = ({
  dateFrom,
  timeFrom,
  airportFrom,
  dateTo,
  timeTo,
  airportTo,
  duration,
  tag,
  route,
}) => {
  const flightDuration = route ? (route.to.date - route.from.date) / 60000 : duration;
  return (
    <div className={styles.waytime}>
      <div className={styles.way}>
        <FlightTimePortDetails
          timestamp={route?.from.date}
          date={dateFrom}
          time={timeFrom}
          airport={route?.from.airport || airportFrom}
        />
        <FlightArrow />
        <FlightTimePortDetails
          timestamp={route?.to.date}
          date={dateTo}
          time={timeTo}
          airport={route?.to.airport || airportTo}
        />
      </div>
      <div className={styles.timestatus}>
        <FlightDuration duration={formatDuartion(flightDuration)} />
        <FlightTag tag={route?.tag || tag} />
      </div>
    </div>
  );
};

export default FlightRoute;
