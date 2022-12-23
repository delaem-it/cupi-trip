import { FunctionComponent } from "react";
import SliderInput from "../components/SliderInput";
import styles from "./FilterPrice.module.css";

const FilterPrice: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div className={styles.div}>Цена</div>
        <img
          className={styles.icons16px}
          alt=""
          src="../icons/icons-16px11.svg"
        />
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
      <SliderInput from="2 985 ₽" to="19 985 ₽" />
    </div>
  );
};

export default FilterPrice;
