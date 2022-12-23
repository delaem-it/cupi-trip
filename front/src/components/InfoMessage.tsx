import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./InfoMessage.module.css";

type InfoMessageType = {
  title?: string;
  subtitle?: string;

  /** Style props */
  componentColor?: Property.Color;
  headingsubtitlePadding?: Property.Padding;
  headingsubtitleBoxSizing?: Property.BoxSizing;
  componentFontSize?: Property.FontSize;
  componentColor1?: Property.Color;
};

const InfoMessage: FunctionComponent<InfoMessageType> = ({
  title,
  subtitle,
  componentColor,
  headingsubtitlePadding,
  headingsubtitleBoxSizing,
  componentFontSize,
  componentColor1,
}) => {
  const div7Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const headingsubtitleStyle: CSS.Properties = useMemo(() => {
    return {
      padding: headingsubtitlePadding,
      boxSizing: headingsubtitleBoxSizing,
    };
  }, [headingsubtitlePadding, headingsubtitleBoxSizing]);

  const div8Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: componentFontSize,
      color: componentColor1,
    };
  }, [componentFontSize, componentColor1]);

  return (
    <div className={styles.headingsubtitle} style={headingsubtitleStyle}>
      <div className={styles.div} style={div8Style}>
        {title}
      </div>
      <div className={styles.div1} style={div7Style}>
        {subtitle}
      </div>
    </div>
  );
};

export default InfoMessage;
