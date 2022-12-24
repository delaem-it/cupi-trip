import { FunctionComponent } from 'react';
import InfoMessage from '../components/InfoMessage';
import Button from '../components/Button';
import styles from './SearchMessage.module.css';

const SearchMessage: FunctionComponent = () => {
  return (
    <div className={styles.headingbutton}>
      <div className={styles.iconheading}>
        <img className={styles.icon56px} alt="" src="../icons/icon-56px.svg" />
        <InfoMessage
          title="Нет подходящих вариантов"
          subtitle="К сожалению, по выбранному вами направлению не найдено вариантов перелета.Попробуйте изменить даты и/или города вылета/прилета."
          componentColor="var(--gray-81838e)"
        />
      </div>
      <Button style={{ width: '196px', boxShadow: 'var(--search-field)' }}>Сбросить фильтр</Button>
    </div>
  );
};

export default SearchMessage;
