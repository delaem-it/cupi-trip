import { Slider } from '@mui/material';
import { FunctionComponent } from 'react';
import { formatTime } from '../../../utils/formatting';
import styles from './FlightTimeFilter.module.scss';

type FlightTimeFilterType = {
  direction: string;
  departureLabel: string;
  departure: number[];
  arrivalLabel: string;
  arrival: number[];
  onChange: (name: string, v: number | number[]) => void;
};

const FlightTimeFilter: FunctionComponent<FlightTimeFilterType> = ({
  direction,
  departureLabel,
  arrivalLabel,
  departure,
  arrival,
  onChange,
}) => {
  const min = 0;
  const max = 1440; //minutes in a day
  return (
    <div className={styles.group}>
      <div className={styles.direction}>{direction}</div>

      <div className={styles.filterGroup}>
        <div className={styles.labelsGroup}>
          <label htmlFor={departureLabel}>{departureLabel}</label>
          <div className={styles.labels}>
            <div className={styles.div}>{formatTime(departure[0])}</div>
            <div className={styles.div}>{formatTime(departure[1])}</div>
          </div>
        </div>
        <Slider
          aria-labelledby={departureLabel}
          size="small"
          value={departure}
          min={min}
          max={max}
          onChange={(e, value) => onChange(departureLabel, value)}
        />
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.labelsGroup}>
          <label htmlFor={arrivalLabel}>{arrivalLabel}</label>
          <div className={styles.labels}>
            <div className={styles.div}>{formatTime(arrival[0])}</div>
            <div className={styles.div}>{formatTime(arrival[1])}</div>
          </div>
        </div>
        <Slider
          aria-labelledby={arrivalLabel}
          size="small"
          value={arrival}
          min={min}
          max={max}
          onChange={(e, value) => onChange(arrivalLabel, value)}
        />
      </div>
    </div>
  );
};

export default FlightTimeFilter;
