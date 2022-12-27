import { FunctionComponent } from 'react';
import SliderInput from '../SliderInput';
import styles from './FilterTransferDuration.module.css';

const FilterTransferDuration: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div className={styles.div}>Длительность пересадки</div>
        <img className={styles.icons16px} alt="" src="../icons/icons-16px11.svg" />
      </div>
      <div className={styles.filterLists}>
        <div className={styles.list}>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>1 пересадка</div>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>2 пересадки</div>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>3 пересадки</div>
          </div>
          <div className={styles.checkbox}>
            <div className={styles.icons20px}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.div1}>4 пересадки</div>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.rectangleDiv4} />
        </div>
      </div>
      <SliderInput
        from="1 ч 15 мин"
        to="12 ч 40 мин"
        linePadding="0px var(--padding-6xl) 0px 0px"
        lineBoxSizing="border-box"
        pointJustifyContent="flex-start"
        pointGap="var(--gap-4xl)"
      />
    </div>
  );
};

export default FilterTransferDuration;
