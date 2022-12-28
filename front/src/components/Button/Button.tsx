import { CSSProperties, FC } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

type ButtonType = {
  iconBefore?: string;
  iconAfter?: string;
  variant?: 'contained' | 'outlined' | 'text';
  children?: JSX.Element | string;
  onClick?: () => void;
  /** Style props */
  style?: CSSProperties;
  className?: string;
};

const Button: FC<ButtonType> = ({
  iconBefore,
  iconAfter,
  variant = 'contained',
  children,
  onClick,
  style = {},
  className = '',
}) => {
  return (
    <ButtonUnstyled className={clsx(styles.button, styles[variant], className)} style={{ ...style }} onClick={onClick}>
      {iconBefore && <img className={styles.icon} alt="" src={iconBefore} />}
      {children}
      {iconAfter && <img className={styles.icon} alt="" src={iconAfter} />}
    </ButtonUnstyled>
  );
};

export default Button;
