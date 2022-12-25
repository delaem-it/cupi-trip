import { FC, useMemo } from 'react';
import CSS, { Property } from 'csstype';
import styles from './FlightPrice.module.scss';

type FlightPriceType = {
  price?: string;

  /** Style props */
  componentWidth?: Property.Width;
};

const FlightPrice: FC<FlightPriceType> = ({ price, componentWidth }) => {
  const div5Style: CSS.Properties = useMemo(() => {
    return {
      width: componentWidth,
    };
  }, [componentWidth]);

  return (
    <div className={styles.div} style={div5Style}>
      {price}
    </div>
  );
};

export default FlightPrice;
