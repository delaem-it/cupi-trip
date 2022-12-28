import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SliderInput.module.css";

type SliderInputType = {
  from?: string;
  to?: string;

  /** Style props */
  linePadding?: Property.Padding;
  lineBoxSizing?: Property.BoxSizing;
  pointJustifyContent?: Property.JustifyContent;
  pointGap?: Property.Gap;
};

const SliderInput: FunctionComponent<SliderInputType> = ({
  from,
  to,
  linePadding,
  lineBoxSizing,
  pointJustifyContent,
  pointGap,
}) => {
  const lineStyle: CSS.Properties = useMemo(() => {
    return {
      padding: linePadding,
      boxSizing: lineBoxSizing,
    };
  }, [linePadding, lineBoxSizing]);

  const pointStyle: CSS.Properties = useMemo(() => {
    return {
      justifyContent: pointJustifyContent,
      gap: pointGap,
    };
  }, [pointJustifyContent, pointGap]);

  return (
    <div className={styles.lineFilter}>
      <div className={styles.price}>
        <div className={styles.div}>{from}</div>
        <div className={styles.div1}>{to}</div>
      </div>
      <div className={styles.line}>
        <div className={styles.line1} style={lineStyle}>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.point} style={pointStyle}>
          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
          <img className={styles.bulletIcon} alt="" src="../icons/bullet.svg" />
        </div>
      </div>
    </div>
  );
};

export default SliderInput;
