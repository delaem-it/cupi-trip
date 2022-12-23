import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SliderInputWIthLabel.module.css";

type SliderInputWIthLabelType = {
  label?: string;
  from?: string;
  to?: string;

  /** Style props */
  linePadding?: Property.Padding;
  lineBoxSizing?: Property.BoxSizing;
  pointJustifyContent?: Property.JustifyContent;
  pointGap?: Property.Gap;
};

const SliderInputWIthLabel: FunctionComponent<SliderInputWIthLabelType> = ({
  label,
  from,
  to,
  linePadding,
  lineBoxSizing,
  pointJustifyContent,
  pointGap,
}) => {
  const line1Style: CSS.Properties = useMemo(() => {
    return {
      padding: linePadding,
      boxSizing: lineBoxSizing,
    };
  }, [linePadding, lineBoxSizing]);

  const point1Style: CSS.Properties = useMemo(() => {
    return {
      justifyContent: pointJustifyContent,
      gap: pointGap,
    };
  }, [pointJustifyContent, pointGap]);

  return (
    <div className={styles.lineFilter}>
      <div className={styles.frameDiv}>
        <div className={styles.div}>{label}</div>
        <div className={styles.price}>
          <div className={styles.div1}>{from}</div>
          <div className={styles.div2}>{to}</div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.line1} style={line1Style}>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.point} style={point1Style}>
          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
        </div>
      </div>
    </div>
  );
};

export default SliderInputWIthLabel;
