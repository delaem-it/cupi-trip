import { FunctionComponent } from "react";
import styles from "./CalendarDropdownMonth2.module.css";

const CalendarDropdownMonth2: FunctionComponent = () => {
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
        <button className={styles.button}>
          <div className={styles.div21}>1</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>2</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>3</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>4</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>5</div>
        </button>
      </div>
      <div className={styles.div16}>
        <button className={styles.button}>
          <div className={styles.div21}>6</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>7</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>8</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>9</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>10</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>11</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>12</div>
        </button>
      </div>
      <div className={styles.div16}>
        <button className={styles.button}>
          <div className={styles.div21}>13</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>14</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>15</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>16</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>17</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>18</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>19</div>
        </button>
      </div>
      <div className={styles.div16}>
        <button className={styles.button}>
          <div className={styles.div21}>20</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>21</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>22</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>23</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>24</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>25</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>26</div>
        </button>
      </div>
      <div className={styles.div16}>
        <button className={styles.button}>
          <div className={styles.div21}>27</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>28</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>29</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>30</div>
        </button>
        <button className={styles.button}>
          <div className={styles.div21}>31</div>
        </button>
        <div className={styles.div17}>
          <div className={styles.div18}>31</div>
        </div>
        <div className={styles.div17}>
          <div className={styles.div18}>31</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarDropdownMonth2;
