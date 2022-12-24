import { FunctionComponent, useMemo } from 'react';
import CSS, { Property } from 'csstype';
import FilterPrice from '../components/FilterPrice';
import FilterTransfers from '../components/FilterTransfers';
import FilterTransferDuration from '../components/FilterTransferDuration';
import FilterCompanies from '../components/FilterCompanies';
import FilterDepartureArrival from '../components/FilterDepartureArrival';
import ButtonWithIconBefore from '../components/ButtonWithIconBefore';
import styles from './FilterSidebar.module.css';
import Button from './Button';

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

  return (
    <div className={styles.filter} style={filterStyle}>
      <button className={styles.button}>
        <img className={styles.icons16px} alt="" src="../icons/icons-16px10.svg" />
        <div className={styles.div}>Фильтр</div>
      </button>
      <div className={styles.filter1}>
        <div className={styles.filter2}>
          <FilterPrice />
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
