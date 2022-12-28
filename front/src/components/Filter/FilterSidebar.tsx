import { FunctionComponent, useState } from 'react';
import ButtonWithIconBefore from '../ButtonWithIconBefore';
import Button from '../Button';
import FilterPrice from './FilterPrice';
import FilterTransfers from './FilterTransfers';
import FilterTransferDuration from './FilterTransferDuration';
import FilterCompanies from './FilterCompanies';
import FilterDepartureArrival from './FilterDepartureArrival';
import styles from './FilterSidebar.module.scss';

const FilterSidebar: FunctionComponent = () => {
  const [price, setPrice] = useState([0, 10000]);
  const [transferDuration, setTransferDuration] = useState([0, 720]);
  const handlePriceChange = (e: Event, newValue: number | number[]) =>
    typeof newValue !== 'number' && setPrice(newValue);
  const handleTransferDurationChange = (e: Event, newValue: number | number[]) =>
    typeof newValue !== 'number' && setTransferDuration(newValue);

  return (
    <div className={styles.filter}>
      <button className={styles.button}>
        <img className={styles.icons16px} alt="" src="../icons/icons-16px10.svg" />
        <div className={styles.div}>Фильтр</div>
      </button>
      <div className={styles.filter1}>
        <div className={styles.filter2}>
          <FilterPrice value={price} min={0} max={10000} onChange={handlePriceChange} />
          <FilterTransfers />
          <FilterTransferDuration value={transferDuration} min={0} max={720} onChange={handleTransferDurationChange} />
          <FilterCompanies />
          <FilterDepartureArrival />
        </div>
      </div>
      <ButtonWithIconBefore icons16px="../icons/icons-16px16.svg" text="Сбросить фильтр" />
      <Button variant="text" iconBefore="../icons/icons-16px16.svg">
        Сбросить фильтр
      </Button>
    </div>
  );
};

export default FilterSidebar;
