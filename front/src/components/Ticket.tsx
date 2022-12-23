import { FunctionComponent } from "react";
import AviacompanyLogo from "../components/AviacompanyLogo";
import FlightRoute from "../components/FlightRoute";
import FlightPrice from "../components/FlightPrice";
import Button from "../components/Button";
import styles from "./Ticket.module.css";

type TicketType = {
  companyName?: string;
  dateFrom?: string;
  timeFrom?: string;
  airportFrom?: string;
  price?: string;
};

const Ticket: FunctionComponent<TicketType> = ({
  companyName,
  dateFrom,
  timeFrom,
  airportFrom,
  price,
}) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.waytimeavia}>
        <AviacompanyLogo logo="../icons/logo.svg" companyName={companyName} />
        <FlightRoute
          dateFrom={dateFrom}
          timeFrom={timeFrom}
          airportFrom={airportFrom}
        />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.pricebutton}>
        <FlightPrice price={price} />
        <Button buttonText="Забронировать" />
      </div>
    </div>
  );
};

export default Ticket;
