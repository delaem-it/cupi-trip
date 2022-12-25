import { FC } from 'react';
import { Property } from 'csstype';
import styles from './FlightTag.module.scss';

type FlightTagType = {
  tag?: string;

  /** Style props */
  componentColor?: Property.Color;
  componentDisplay?: Property.Display;
};

const FlightTag: FC<FlightTagType> = ({ tag, componentColor, componentDisplay }) => {
  if (!tag) return null;
  return (
    <div
      className={styles.div}
      style={{
        color: componentColor,
        display: componentDisplay,
      }}
    >
      {tag}
    </div>
  );
};

export default FlightTag;
