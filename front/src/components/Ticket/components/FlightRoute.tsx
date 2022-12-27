import { FC } from 'react';
import styles from './FlightRoute.module.scss';
import { Route, Tag } from '../../../types/ticket';
import FlightTimePortDetails from '../components/FlightTimePortDetails';
import FlightArrow from '../components/FlightArrow';
import FlightDuration from '../components/FlightDuration';
import FlightTag from '../components/FlightTag';
import { formatDuration } from '../../../utils/formatting';
import { intervalToDuration } from 'date-fns';

type FlightRouteType = {
  route?: Route;
};

const FlightRoute: FC<FlightRouteType> = ({ route }) => {
  if (!route) return null;

  const flightDuration = intervalToDuration({
    start: route.from.date,
    end: route.to.date,
  });
  return (
    <div className={styles.waytime}>
      <div className={styles.way}>
        <FlightTimePortDetails timestamp={route.from.date} airport={route.from.airport} />
        <FlightArrow transitions={route.transfers} />
        <FlightTimePortDetails timestamp={route.to.date} airport={route.to.airport} />
      </div>
      <div className={styles.timestatus}>
        <FlightDuration duration={formatDuration(flightDuration)} />
        <FlightTag tag={route.tag} />
      </div>
    </div>
  );
};

export default FlightRoute;
