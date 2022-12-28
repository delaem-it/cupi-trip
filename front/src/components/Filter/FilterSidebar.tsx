import { FunctionComponent, useMemo, useState } from 'react';
import CSS, { Property } from 'csstype';
import ButtonWithIconBefore from '../ButtonWithIconBefore';
import styles from './FilterSidebar.module.scss';
import Button from '../Button';
import FilterPrice from './FilterPrice';
import FilterTransfers from './FilterTransfers';
import FilterTransferDuration from './FilterTransferDuration';
import FilterCompanies from './FilterCompanies';
import FilterDepartureArrival from './FilterDepartureArrival';

type FilterSidebarType = {
  /** Style props */
  filterCursor?: Property.Cursor;
};

const FilterSidebar: FunctionComponent<FilterSidebarType> = ({ filterCursor }) => {
  const filterStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: filterCursor,
    };
  }, [filterCursor]);

  const [price, setPrice] = useState([400, 9000]);
  const handlePriceChange = (e: Event, newValue: number | number[]) =>
    typeof newValue !== 'number' && setPrice(newValue);

  return (
    <div className={styles.filter} style={filterStyle}>
      <button className={styles.button}>
        <img className={styles.icons16px} alt="" src="../icons/icons-16px10.svg" />
        <div className={styles.div}>Фильтр</div>
      </button>
      <div className={styles.filter1}>
        <div className={styles.filter2}>
          <FilterPrice value={price} min={0} max={10000} onChange={handlePriceChange} />
          <FilterTransfers />
          <FilterTransferDuration />
          <FilterCompanies />
          <FilterDepartureArrival />
        </div>
      </div>
      <ButtonWithIconBefore icons16px="../icons/icons-16px16.svg" text="Сбросить фильтр" />
      <Button iconBefore="../icons/icons-16px16.svg">Сбросить фильтр</Button>
    </div>
  );
};

export default FilterSidebar;
