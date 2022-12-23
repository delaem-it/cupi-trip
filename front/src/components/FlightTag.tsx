import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FlightTag.module.css";

type FlightTagType = {
  tag?: string;

  /** Style props */
  componentColor?: Property.Color;
  componentDisplay?: Property.Display;
};

const FlightTag: FunctionComponent<FlightTagType> = ({
  tag,
  componentColor,
  componentDisplay,
}) => {
  const div4Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
      display: componentDisplay,
    };
  }, [componentColor, componentDisplay]);

  return (
    <div className={styles.div} style={div4Style}>
      {tag}
    </div>
  );
};

export default FlightTag;
