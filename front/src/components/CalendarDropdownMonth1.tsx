import { FunctionComponent } from "react";
import styles from "./CalendarDropdownMonth1.module.css";

const CalendarDropdownMonth1: FunctionComponent = () => {
  return (
    <div className={styles.dropdownData}>
      <div className={styles.month}>
        <button className={styles.scrollArrow}>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px146.svg"
          />
        </button>
        <div className={styles.div}>Май 2022</div>
        <button className={styles.scrollArrow1}>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px147.svg"
          />
        </button>
      </div>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <div className={styles.div3}>Пн</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>Вт</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>Ср</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>Чт</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>Пт</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>Сб</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div3}>Вс</div>
        </div>
      </div>
      <div className={styles.div16}>
        <div className={styles.div17}>
          <div className={styles.div18}>31</div>
        </div>
        <div className={styles.div17}>
          <div className={styles.div18}>31</div>
        </div>
        <div className={styles.div21}>
          <div className={styles.div18}>1</div>
        </div>
        <div className={styles.div21}>
          <div className={styles.div18}>2</div>
        </div>
        <div className={styles.div21}>
          <div className={styles.div18}>3</div>
        </div>
        <div className={styles.div21}>
          <div className={styles.div18}>4</div>
        </div>
        <div className={styles.div21}>
          <div className={styles.div18}>5</div>
        </div>
      </div>
      <div className={styles.div16}>
        <div className={styles.div21}>
          <div className={styles.div18}>6</div>
        </div>
        <div className={styles.div21}>
          <div className={styles.div18}>7</div>
        </div>
        <button className={styles.button}>
          <div className={styles.div36}>8</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>9</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>10</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>11</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>12</div>
        </button>
      </div>
      <div className={styles.div16}>
        <button className={styles.button}>
          <div className={styles.div36}>13</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>14</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>15</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>16</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>17</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>18</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>19</div>
        </button>
      </div>
      <div className={styles.div16}>
        <button className={styles.button}>
          <div className={styles.div36}>20</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>21</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>22</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>23</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>24</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>25</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>26</div>
        </button>
      </div>
      <div className={styles.div57}>
        <button className={styles.button}>
          <div className={styles.div36}>27</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>28</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>29</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>30</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div36}>31</div>
        </button>
        <div className={styles.div63}>
          <div className={styles.div18}>31</div>
        </div>
        <div className={styles.div63}>
          <div className={styles.div18}>31</div>
        </div>
      </div>
      <div className={styles.button24}>
        <button className={styles.button25}>
          <div className={styles.div67}>Обратный билет не нужен</div>
        </button>
      </div>
    </div>
  );
};

export default CalendarDropdownMonth1;
