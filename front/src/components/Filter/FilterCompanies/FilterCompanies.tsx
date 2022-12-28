import { FunctionComponent } from 'react';
import CheckboxWIthLogo from '../../CheckboxWIthLogo';
import styles from './FilterCompanies.module.scss';

const FilterCompanies: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div className={styles.div}>Авиакомпании</div>
        <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
      </div>
      <div className={styles.filterLists}>
        <div className={styles.list}>
          <CheckboxWIthLogo logo="../icons/aeroPobeda.svg" label="Победа" />
          <CheckboxWIthLogo logo="../icons/logo1.svg" label="S7 Airlines" />
          <CheckboxWIthLogo logo="../icons/aeroNordwind.svg" label="Nordwind" />
          <CheckboxWIthLogo logo="../icons/logo3.svg" label="Turkish airlines" />
          <CheckboxWIthLogo logo="../icons/aeroaeroSAS.svg" label="SAS" />
          <CheckboxWIthLogo logo="../icons/logo5.svg" label="Qatar Airways" />
          <CheckboxWIthLogo logo="../icons/logo6.svg" label="Lufthansa" />
        </div>
        <div className={styles.slider}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.rectangleDiv1} />
    </div>
  );
};

export default FilterCompanies;
