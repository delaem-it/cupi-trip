import { FunctionComponent } from 'react';
import { Slider } from '@mui/material';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterTransferDuration.module.scss';
import { formatDuration } from '../../../utils/formatting';

interface FilterTransferDurationProps {
  min: number;
  max: number;
  value: number[];
  onChange: (e: Event, v: number | number[]) => void;
}
const FilterTransferDuration: FunctionComponent<FilterTransferDurationProps> = ({ min, max, value, onChange }) => {
  const v0Hours = Math.floor(value[0] / 60);
  const v0Minutes = value[0] - v0Hours * 60;
  const v1Hours = Math.floor(value[1] / 60);
  const v1Minutes = value[1] - v1Hours * 60;

  return (
    <FilterItem name="Длительность пересадки">
      <div className={styles.labels}>
        <span>{formatDuration({ hours: v0Hours, minutes: v0Minutes })}</span>
        <span>{formatDuration({ hours: v1Hours, minutes: v1Minutes })}</span>
      </div>
      <Slider
        aria-labelledby="Длительность пересадки"
        size="small"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </FilterItem>
  );
};

export default FilterTransferDuration;
