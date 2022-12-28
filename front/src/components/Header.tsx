import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import MainLogo from "../components/MainLogo";
import MainNavigation from "../components/MainNavigation";
import LoginButton from "../components/LoginButton";
import styles from "./Header.module.css";

type HeaderType = {
  component?: string;
  icons24px?: string;
  vector194Stroke?: string;
  vector195Stroke?: string;
  vector196Stroke?: string;

  /** Style props */
  headerBackgroundColor?: Property.BackgroundColor;
};

const Header: FunctionComponent<HeaderType> = ({
  headerBackgroundColor,
  component,
  icons24px,
  vector194Stroke,
  vector195Stroke,
  vector196Stroke,
}) => {
  const headerStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: headerBackgroundColor,
    };
  }, [headerBackgroundColor]);

  return (
    <header className={styles.header} style={headerStyle}>
      <MainLogo component={component} />
      <MainNavigation />
      <div className={styles.buttonHeader}>
        <LoginButton icons24px={icons24px} />
        <button className={styles.icons24px}>
          <img
            className={styles.vector194Stroke}
            alt=""
            src={vector194Stroke}
          />
          <img
            className={styles.vector195Stroke}
            alt=""
            src={vector195Stroke}
          />
          <img
            className={styles.vector196Stroke}
            alt=""
            src={vector196Stroke}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
