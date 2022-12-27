import { FunctionComponent } from 'react';
import { Company } from '../../../types/ticket';
import styles from './AviacompanyLogo.module.scss';

type AviacompanyLogoType = {
  company?: Company;
};

/* TODO: add default logo */

const AviacompanyLogo: FunctionComponent<AviacompanyLogoType> = ({ company }) => {
  return (
    <div className={styles.avia}>
      <img className={styles.logoIcon} alt="" src={company?.logo} />
      <div className={styles.div}>{company?.name}</div>
    </div>
  );
};

export default AviacompanyLogo;
