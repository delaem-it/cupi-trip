import { FunctionComponent } from "react";
import FlightTimeFIlter from "../components/FlightTimeFIlter";
import styles from "./FilterDepartureArrival.module.css";

const FilterDepartureArrival: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div className={styles.div}>Вылет и прибытие</div>
        <img
          className={styles.icons16px}
          alt=""
          src="../icons/icons-16px11.svg"
        />
      </div>
      <div className={styles.filterLists}>
        <div className={styles.list}>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>1 пересадка</div>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>2 пересадки</div>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>3 пересадки</div>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>4 пересадки</div>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.rectangleDiv4} />
        </div>
      </div>
      <FlightTimeFIlter
        direction="ТУДА"
        departureLabel="Вылет из Москвы"
        departureFrom="00:00"
        departureTo="23:59"
        arrivalLabel="Прибытие в Санкт-Петербург"
        arrivalFrom="00:00"
        arrivalTo="12:00"
      />
      <FlightTimeFIlter
        direction="ОБРАТНО"
        departureLabel="Вылет из Санкт-Петербург"
        departureFrom="00:00"
        departureTo="12:00"
        arrivalLabel="Прибытие в Москву"
        arrivalFrom="00:00"
        arrivalTo="12:00"
      />
    </div>
  );
};

export default FilterDepartureArrival;
