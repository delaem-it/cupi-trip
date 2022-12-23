import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FlightTimeDetails.module.css";

type FlightTimeDetailsType = {
  time?: string;
  date?: string;

  /** Style props */
  frame3AlignSelf?: Property.AlignSelf;
  frame3Width?: Property.Width;
  frame3FlexShrink?: Property.FlexShrink;
  componentAlignSelf?: Property.AlignSelf;
  componentFontSize?: Property.FontSize;
  componentFontWeight?: Property.FontWeight;
  componentAlignSelf1?: Property.AlignSelf;
  componentFontSize1?: Property.FontSize;
  componentColor?: Property.Color;
  componentDisplay?: Property.Display;
  componentFontWeight1?: Property.FontWeight;
};

const FlightTimeDetails: FunctionComponent<FlightTimeDetailsType> = ({
  time = "23 ноября, Ср",
  date,
  frame3AlignSelf,
  frame3Width,
  frame3FlexShrink,
  componentAlignSelf,
  componentFontSize,
  componentFontWeight,
  componentAlignSelf1,
  componentFontSize1,
  componentColor,
  componentDisplay,
  componentFontWeight1,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frame3AlignSelf,
      width: frame3Width,
      flexShrink: frame3FlexShrink,
    };
  }, [frame3AlignSelf, frame3Width, frame3FlexShrink]);

  const div3Style: CSS.Properties = useMemo(() => {
    return {
      alignSelf: componentAlignSelf,
      fontSize: componentFontSize,
      fontWeight: componentFontWeight,
    };
  }, [componentAlignSelf, componentFontSize, componentFontWeight]);

  const spanStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: componentAlignSelf1,
      fontSize: componentFontSize1,
      color: componentColor,
      display: componentDisplay,
      fontWeight: componentFontWeight1,
    };
  }, [
    componentAlignSelf1,
    componentFontSize1,
    componentColor,
    componentDisplay,
    componentFontWeight1,
  ]);

  return (
    <div className={styles.frameDiv} style={frameDivStyle}>
      <div className={styles.div} style={div3Style}>
        {time}
      </div>
      <span className={styles.span} style={spanStyle}>
        {date}
      </span>
    </div>
  );
};

export default FlightTimeDetails;
