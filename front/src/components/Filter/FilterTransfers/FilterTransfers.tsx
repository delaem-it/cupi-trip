import { FunctionComponent } from 'react';
import Input from '../../Input/Input';
import FilterItem from '../FilterItem/FilterItem';
import styles from './FilterTransfers.module.scss';

const FilterTransfers: FunctionComponent = () => {
  return (
    <FilterItem name="Пересадки">
      <div className={styles.list}>
        <Input type="checkbox" checked label="Без пересадок" name="withoutTransfers" />
        <Input type="checkbox" label="1 пересадка" name="singleTransfer" />
        <Input type="checkbox" label="2 и более" name="moreTransfers" />
        <Input type="checkbox" label="Без ночных пересадок" name="withoutNightTransfers" />
        <Input type="checkbox" label="Без смены аэропорта" name="withoutAirportChangeTransfers" />
      </div>
    </FilterItem>
  );
};

export default FilterTransfers;
