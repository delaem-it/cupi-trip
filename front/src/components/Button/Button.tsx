import { FunctionComponent, useMemo } from 'react';
import { Property } from 'csstype';
import styles from './Button.module.css';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

type ButtonType = {
  buttonText?: string;
  iconBefore?: string;
  iconAfter?: string;
  /** Style props */
  buttonWidth?: Property.Width;
  boxShadow?: Property.BoxShadow;
};

const Button: FunctionComponent<ButtonType> = ({ buttonText, iconBefore, iconAfter, buttonWidth, boxShadow }) => {
  return (
    <ButtonUnstyled className={styles.button} style={{ width: buttonWidth, boxShadow: boxShadow }}>
      {iconBefore && <img className={styles.icon} alt="" src={iconBefore} />}
      {buttonText}
      {iconAfter && <img className={styles.icon} alt="" src={iconAfter} />}
    </ButtonUnstyled>
  );
};

export default Button;
