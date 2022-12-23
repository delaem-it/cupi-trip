import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ButtonWithIconAfter.module.css";

type ButtonWithIconAfterType = {
  reviewText?: string;
  icons16px?: string;

  /** Style props */
  arrowFutherJustifyContent?: Property.JustifyContent;
  arrowFutherGap?: Property.Gap;
  arrowFutherCursor?: Property.Cursor;
  arrowFutherBorder?: Property.Border;
  arrowFutherPadding?: Property.Padding;
  arrowFutherBackgroundColor?: Property.BackgroundColor;
  arrowFutherAlignSelf?: Property.AlignSelf;
  arrowFutherBorderRadius?: Property.BorderRadius;
  arrowFutherBoxSizing?: Property.BoxSizing;
  arrowFutherTransition?: Property.Transition;
  reviewTextCursor?: Property.Cursor;
  reviewTextBorder?: Property.Border;
  reviewTextPadding?: Property.Padding;
  reviewTextBackgroundColor?: Property.BackgroundColor;
  reviewTextFontSize?: Property.FontSize;
  reviewTextColor?: Property.Color;
  reviewTextTextAlign?: Property.TextAlign;
  reviewTextTransition?: Property.Transition;
  icons16pxWidth?: Property.Width;
  icons16pxHeight?: Property.Height;
  icons16pxOverflow?: Property.Overflow;
};

const ButtonWithIconAfter: FunctionComponent<ButtonWithIconAfterType> = ({
  reviewText,
  icons16px,
  arrowFutherJustifyContent,
  arrowFutherGap,
  arrowFutherCursor,
  arrowFutherBorder,
  arrowFutherPadding,
  arrowFutherBackgroundColor,
  arrowFutherAlignSelf,
  arrowFutherBorderRadius,
  arrowFutherBoxSizing,
  arrowFutherTransition,
  reviewTextCursor,
  reviewTextBorder,
  reviewTextPadding,
  reviewTextBackgroundColor,
  reviewTextFontSize,
  reviewTextColor,
  reviewTextTextAlign,
  reviewTextTransition,
  icons16pxWidth,
  icons16pxHeight,
  icons16pxOverflow,
}) => {
  const arrowFutherStyle: CSS.Properties = useMemo(() => {
    return {
      justifyContent: arrowFutherJustifyContent,
      gap: arrowFutherGap,
      cursor: arrowFutherCursor,
      border: arrowFutherBorder,
      padding: arrowFutherPadding,
      backgroundColor: arrowFutherBackgroundColor,
      alignSelf: arrowFutherAlignSelf,
      borderRadius: arrowFutherBorderRadius,
      boxSizing: arrowFutherBoxSizing,
      transition: arrowFutherTransition,
    };
  }, [
    arrowFutherJustifyContent,
    arrowFutherGap,
    arrowFutherCursor,
    arrowFutherBorder,
    arrowFutherPadding,
    arrowFutherBackgroundColor,
    arrowFutherAlignSelf,
    arrowFutherBorderRadius,
    arrowFutherBoxSizing,
    arrowFutherTransition,
  ]);

  const reviewTextStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: reviewTextCursor,
      border: reviewTextBorder,
      padding: reviewTextPadding,
      backgroundColor: reviewTextBackgroundColor,
      fontSize: reviewTextFontSize,
      color: reviewTextColor,
      textAlign: reviewTextTextAlign,
      transition: reviewTextTransition,
    };
  }, [
    reviewTextCursor,
    reviewTextBorder,
    reviewTextPadding,
    reviewTextBackgroundColor,
    reviewTextFontSize,
    reviewTextColor,
    reviewTextTextAlign,
    reviewTextTransition,
  ]);

  const icons16pxStyle: CSS.Properties = useMemo(() => {
    return {
      width: icons16pxWidth,
      height: icons16pxHeight,
      overflow: icons16pxOverflow,
    };
  }, [icons16pxWidth, icons16pxHeight, icons16pxOverflow]);

  return (
    <div className={styles.arrowFuther} style={arrowFutherStyle}>
      <button className={styles.reviewText} style={reviewTextStyle}>
        {reviewText}
      </button>
      <img
        className={styles.icons16px}
        alt=""
        src={icons16px}
        style={icons16pxStyle}
      />
    </div>
  );
};

export default ButtonWithIconAfter;
