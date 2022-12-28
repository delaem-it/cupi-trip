import { ChangeEvent, FunctionComponent, useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterDepartureArrival.module.scss';
import FlightTimeFilter from './FlightTimeFilter';

const FilterDepartureArrival: FunctionComponent = () => {
  const [departureTo, setDepartureTo] = useState([0, 1440]);
  const [arrivalTo, setArrivalTo] = useState([0, 1440]);
  const [departureFrom, setDepartureFrom] = useState([0, 1440]);
  const [arrivalFrom, setArrivalFrom] = useState([0, 1440]);

  const handleChangeTo = (name: string, newValue: number | number[]) => {
    if (typeof newValue === 'number' || !name) return;
    name.includes('Вылет') ? setDepartureTo(newValue) : setArrivalTo(newValue);
  };
  const handleChangeFrom = (name: string, newValue: number | number[]) => {
    if (typeof newValue === 'number' || !name) return;
    name.includes('Вылет') ? setDepartureFrom(newValue) : setArrivalFrom(newValue);
  };
  return (
    <FilterItem name="Вылет и прибытие">
      <FlightTimeFilter
        direction="ТУДА"
        departureLabel="Вылет из Москвы"
        departure={departureTo}
        arrivalLabel="Прибытие в Санкт-Петербург"
        arrival={arrivalTo}
        onChange={handleChangeTo}
      />
      <FlightTimeFilter
        direction="ОБРАТНО"
        departureLabel="Вылет из Санкт-Петербург"
        departure={departureFrom}
        arrivalLabel="Прибытие в Москву"
        arrival={arrivalFrom}
        onChange={handleChangeFrom}
      />
    </FilterItem>
  );
};

export default FilterDepartureArrival;
