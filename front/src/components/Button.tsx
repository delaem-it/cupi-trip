import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Button.module.css";
import MUIButton from "@mui/material/Button";

type ButtonType = {
  buttonText?: string;

  /** Style props */
  buttonPadding?: Property.Padding;
  buttonTransition?: Property.Transition;
  buttonBoxShadow?: Property.BoxShadow;
  buttonFlexShrink?: Property.FlexShrink;
  componentFontSize?: Property.FontSize;
  buttonWidth?: Property.Width;
  buttonAlignSelf?: Property.AlignSelf;
};

const Button: FunctionComponent<ButtonType> = ({
  buttonText,
  buttonPadding,
  buttonTransition,
  buttonBoxShadow,
  buttonFlexShrink,
  componentFontSize,
  buttonWidth,
  buttonAlignSelf,
}) => {
  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      padding: buttonPadding,
      transition: buttonTransition,
      boxShadow: buttonBoxShadow,
      flexShrink: buttonFlexShrink,
      width: buttonWidth,
      alignSelf: buttonAlignSelf,
    };
  }, [
    buttonPadding,
    buttonTransition,
    buttonBoxShadow,
    buttonFlexShrink,
    buttonWidth,
    buttonAlignSelf,
  ]);

  const div6Style: CSS.Properties = useMemo(() => {
    return {
      fontSize: componentFontSize,
    };
  }, [componentFontSize]);

  return (
    <MUIButton
      variant="contained"
      // sx={{ p: "var(--padding-sm) var(--padding-lg)", width: "164px" }}
      // className={styles.button}
    >
      {buttonText}
    </MUIButton>
    // <button className={styles.button} style={buttonStyle}>
    //   <div className={styles.div} style={div6Style}>
    //     {buttonText}
    //   </div>
    // </button>
  );
};

export default Button;
