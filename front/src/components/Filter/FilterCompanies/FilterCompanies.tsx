import { FunctionComponent } from 'react';
import CheckboxWIthLogo from '../../CheckboxWIthLogo';
import Checkbox from '../../Input/Checkbox/Checkbox';
import Input from '../../Input/Input';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterCompanies.module.scss';

const FilterCompanies: FunctionComponent = () => {
  return (
    <FilterItem name="Авиакомпании">
      <div className={styles.container}>
        <div className={styles.list}>
          <Input type="checkbox" icon={<img src="../icons/aeroPobeda.svg" alt="" />} label="Победа" name="Pobeda" />
          <Input
            type="checkbox"
            icon={<img src="../icons/aeroS7.svg" alt="" />}
            label="S7 Airlines"
            name="S7 Airlines"
          />
          <Input
            type="checkbox"
            icon={<img src="../icons/aeroNordwind.svg" alt="" />}
            label="Nordwind"
            name="Nordwind"
          />
          <Input
            type="checkbox"
            icon={<img src="../icons/aeroTurkishAirlines.svg" alt="" />}
            label="Turkish airlines"
            name="Turkish airlines"
          />
          <Input type="checkbox" icon={<img src="../icons/aeroSAS.svg" alt="" />} label="SAS" name="SAS" />
          <Input
            type="checkbox"
            icon={<img src="../icons/aeroQatarAirways.svg" alt="" />}
            label="Qatar Airways"
            name="Qatar Airways"
          />
          <Input
            type="checkbox"
            icon={<img src="../icons/aeroLufthansa.svg" alt="" />}
            label="Lufthansa"
            name="Lufthansa"
          />
        </div>
        <div className={styles.shade} />
      </div>
    </FilterItem>

    // <div className={styles.filter}>
    //   <div className={styles.nameFilter}>
    //     <div className={styles.div}>Авиакомпании</div>
    //     <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
    //   </div>
    //   <div className={styles.rectangleDiv1} />
    // </div>
  );
};

export default FilterCompanies;
