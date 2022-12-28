import { FunctionComponent, useMemo, useCallback } from "react";
import CSS, { Property } from "csstype";
import styles from "./LoginButton.module.css";

type LoginButtonType = {
  icons24px?: string;

  /** Style props */
  buttonIconBorder?: Property.Border;
  componentColor?: Property.Color;
};

const LoginButton: FunctionComponent<LoginButtonType> = ({
  buttonIconBorder,
  icons24px,
  componentColor,
}) => {
  const buttonIconStyle: CSS.Properties = useMemo(() => {
    return {
      border: buttonIconBorder,
    };
  }, [buttonIconBorder]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const onButtonIconContainerClick = useCallback(() => {
    // Please sync "Личный кабинет-Персональные данные" to the project
  }, []);

  return (
    <div
      className={styles.buttonIcon}
      onClick={onButtonIconContainerClick}
      style={buttonIconStyle}
    >
      <img className={styles.icons24px} alt="" src={icons24px} />
      <div className={styles.div} style={divStyle}>
        Войти
      </div>
    </div>
  );
};

export default LoginButton;
