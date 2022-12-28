import { Checkbox as MuiCheckbox } from '@mui/material';
import { FunctionComponent } from 'react';
import styles from './Checkbox.module.scss';

type CheckboxType = {
  label: string;
  name: string;
};

const Checked = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1160_109462)">
      <rect width="20" height="20" rx="4" fill="#007AFF" />
      <path
        d="M4.16602 10.0001L8.33268 14.1667L15.8327 6.66675"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1160_109462">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Unchecked = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1120_81111)">
      <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="white" stroke="#A5A7B3" />
    </g>
    <defs>
      <clipPath id="clip0_1120_81111">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Checkbox: FunctionComponent<CheckboxType> = ({ label, name }) => {
  return (
    <div className={styles.checkbox}>
      <MuiCheckbox
        id={name}
        icon={<Unchecked />}
        checkedIcon={<Checked />}
        name={name}
        inputProps={{ 'aria-label': label }}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
