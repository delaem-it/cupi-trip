import { FunctionComponent } from 'react';
import Checkbox from '../Checkbox';
import styles from './FilterTransfers.module.css';

const FilterTransfers: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div className={styles.div}>Пересадки</div>
        <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
      </div>
      <div className={styles.filterLists}>
        <div className={styles.list}>
          <Checkbox label="Без пересадок" />
          <Checkbox label="1 пересадок" />
          <Checkbox label="2 и более" />
          <Checkbox label="Без ночных пересадок" />
          <Checkbox label="Без смены аэропорта" />
        </div>
        <div className={styles.slider}>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
    </div>
  );
};

export default FilterTransfers;
