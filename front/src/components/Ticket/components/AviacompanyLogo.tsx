import { FunctionComponent } from 'react';
import { Company } from '../../../types/ticket';
import styles from './AviacompanyLogo.module.scss';

type AviacompanyLogoType = {
  logo?: string;
  companyName?: string;
  company?: Company;
};

const AviacompanyLogo: FunctionComponent<AviacompanyLogoType> = ({
  logo = '../icons/logo.svg',
  companyName,
  company,
}) => {
  return (
    <div className={styles.avia}>
      <img className={styles.logoIcon} alt="" src={company?.logo || logo} />
      <div className={styles.div}>{company?.name || companyName}</div>
    </div>
  );
};

export default AviacompanyLogo;
