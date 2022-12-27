import { FC } from 'react';
import SliderInputWIthLabel from '../../../components/SliderInputWIthLabel';
import styles from './FlightTimeFilter.module.scss';

type FlightTimeFilterType = {
  direction?: string;
  departureLabel?: string;
  departureFrom?: string;
  departureTo?: string;
  arrivalLabel?: string;
  arrivalFrom?: string;
  arrivalTo?: string;
};

const FlightTimeFilter: FC<FlightTimeFilterType> = ({
  direction,
  departureLabel,
  departureFrom,
  departureTo,
  arrivalLabel,
  arrivalFrom,
  arrivalTo,
}) => {
  return (
    <div className={styles.group}>
      <div className={styles.div}>{direction}</div>
      <SliderInputWIthLabel label={departureLabel} from={departureFrom} to={departureTo} />
      <SliderInputWIthLabel
        label={arrivalLabel}
        from={arrivalFrom}
        to={arrivalTo}
        linePadding="0px var(--padding-6xl) 0px 0px"
        lineBoxSizing="border-box"
        pointJustifyContent="flex-start"
        pointGap="var(--gap-4xl)"
      />
    </div>
  );
};

export default FlightTimeFilter;
