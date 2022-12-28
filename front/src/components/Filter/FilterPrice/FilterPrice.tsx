import { FunctionComponent } from 'react';
import { Slider } from '@mui/material';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterPrice.module.scss';

interface FilterPriceProps {
  min: number;
  max: number;
  value: number[];
  onChange: (e: Event, v: number | number[]) => void;
}

const FilterPrice: FunctionComponent<FilterPriceProps> = ({ min, max, value, onChange }) => {
  return (
    <FilterItem name="Цена">
      <div className={styles.labels}>
        <div className={styles.div}>{value[0] + ' ₽'}</div>
        <div className={styles.div}>{value[1] + ' ₽'}</div>
      </div>
      <Slider aria-labelledby="Цена" size="small" value={value} min={min} max={max} onChange={onChange} />
    </FilterItem>
  );
};

export default FilterPrice;
