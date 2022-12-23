import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./MainNavigation.module.css";

type MainNavigationType = {
  /** Style props */
  componentColor?: Property.Color;
  componentColor1?: Property.Color;
  componentColor2?: Property.Color;
  componentColor3?: Property.Color;
  componentColor4?: Property.Color;
};

const MainNavigation: FunctionComponent<MainNavigationType> = ({
  componentColor,
  componentColor1,
  componentColor2,
  componentColor3,
  componentColor4,
}) => {
  const aStyle: CSS.Properties = useMemo(() => {
    return {
      color: componentColor,
    };
  }, [componentColor]);

  const a1Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor1,
    };
  }, [componentColor1]);

  const a2Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor2,
    };
  }, [componentColor2]);

  const a3Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor3,
    };
  }, [componentColor3]);

  const a4Style: CSS.Properties = useMemo(() => {
    return {
      color: componentColor4,
    };
  }, [componentColor4]);

  return (
    <div className={styles.link}>
      <div className={styles.link1}>
        <a className={styles.a} style={aStyle}>
          Тарифы
        </a>
      </div>
      <div className={styles.link1}>
        <a className={styles.a} style={a1Style}>
          Помощь
        </a>
      </div>
      <div className={styles.link1}>
        <a className={styles.a} style={a2Style}>
          Блог
        </a>
      </div>
      <div className={styles.link1}>
        <a className={styles.a} style={a3Style}>
          Отзывы
        </a>
      </div>
      <div className={styles.link1}>
        <a className={styles.a} style={a4Style}>
          Контакты
        </a>
      </div>
    </div>
  );
};

export default MainNavigation;
