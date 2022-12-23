import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import Select from "../components/Select";
import Button from "../components/Button";
import styles from "./SearchBar.module.css";

type SearchBarType = {
  icons20px?: string;

  /** Style props */
  fieldBoxShadow?: Property.BoxShadow;
  fieldBorder?: Property.Border;
  fieldBoxSizing?: Property.BoxSizing;
  fieldOverflow?: Property.Overflow;
  fieldBoxShadow1?: Property.BoxShadow;
  fieldBorder1?: Property.Border;
  fieldOverflow1?: Property.Overflow;
  fieldsearchmobileBoxShadow?: Property.BoxShadow;
  fieldsearchmobileBorder?: Property.Border;
  fieldsearchmobileBoxSizing?: Property.BoxSizing;
  fieldsearchmobileOverflow?: Property.Overflow;
};

const SearchBar: FunctionComponent<SearchBarType> = ({
  fieldBoxShadow,
  fieldBorder,
  fieldBoxSizing,
  fieldOverflow,
  fieldBoxShadow1,
  fieldBorder1,
  fieldOverflow1,
  icons20px,
  fieldsearchmobileBoxShadow,
  fieldsearchmobileBorder,
  fieldsearchmobileBoxSizing,
  fieldsearchmobileOverflow,
}) => {
  const field1Style: CSS.Properties = useMemo(() => {
    return {
      boxShadow: fieldBoxShadow,
      border: fieldBorder,
      boxSizing: fieldBoxSizing,
      overflow: fieldOverflow,
    };
  }, [fieldBoxShadow, fieldBorder, fieldBoxSizing, fieldOverflow]);

  const field2Style: CSS.Properties = useMemo(() => {
    return {
      boxShadow: fieldBoxShadow1,
      border: fieldBorder1,
      overflow: fieldOverflow1,
    };
  }, [fieldBoxShadow1, fieldBorder1, fieldOverflow1]);

  const fieldsearchmobileStyle: CSS.Properties = useMemo(() => {
    return {
      boxShadow: fieldsearchmobileBoxShadow,
      border: fieldsearchmobileBorder,
      boxSizing: fieldsearchmobileBoxSizing,
      overflow: fieldsearchmobileOverflow,
    };
  }, [
    fieldsearchmobileBoxShadow,
    fieldsearchmobileBorder,
    fieldsearchmobileBoxSizing,
    fieldsearchmobileOverflow,
  ]);

  return (
    <div className={styles.searchFieldbutton}>
      <div className={styles.field} style={field1Style}>
        <Select
          label="Откуда"
          value="Москва"
          icons16px="../icons/icons-16px.svg"
        />
        <div className={styles.line}>
          <div className={styles.rectangleDiv} />
        </div>
        <Select
          label="Куда"
          value="Рим"
          fieldBorder="unset"
          fieldBorderRadius="var(--br-md)"
          icons16px="../icons/icons-16px.svg"
        />
        <div className={styles.line}>
          <div className={styles.rectangleDiv} />
        </div>
        <Select
          label="Дата туда"
          value="23 мая"
          fieldBorderRadius="var(--br-md)"
          icons16px="../icons/icons-16px.svg"
        />
        <div className={styles.line}>
          <div className={styles.rectangleDiv} />
        </div>
        <Select
          label="Дата обратно"
          value="24 мая"
          fieldBorderRadius="var(--br-md)"
          icons16px="../icons/icons-16px.svg"
        />
        <div className={styles.line}>
          <div className={styles.rectangleDiv} />
        </div>
        <Select
          label="Пассажиры, класс"
          value="1 пассажир"
          fieldBorder="unset"
          fieldBorderRadius="var(--br-md)"
          fieldCursor="unset"
          icons16px="../icons/icons-16px.svg"
        />
      </div>
      <div className={styles.field1} style={field2Style}>
        <div className={styles.subtitleheading}>
          <div className={styles.div}>Москва - Рим</div>
          <div className={styles.div1}>
            23 ноября - 24 ноября, 1 пассажир, Эконом
          </div>
        </div>
        <img className={styles.icons20px} alt="" src={icons20px} />
      </div>
      <Button
        buttonText="Найти"
        buttonPadding="var(--padding-sm) var(--padding-lg)"
        buttonTransition="background-color 0.2s"
        buttonBoxShadow="var(--search-field)"
        buttonFlexShrink="0"
        componentFontSize="var(--exo-2-16-semibold-size)"
        buttonWidth="164px"
      />
      <div className={styles.fieldsearchmobile} style={fieldsearchmobileStyle}>
        <div className={styles.field2}>
          <div className={styles.subtitleheading}>
            <div className={styles.div2}>Откуда</div>
            <div className={styles.div3}>Москва</div>
          </div>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px.svg"
          />
        </div>
        <div className={styles.line4}>
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.field2}>
          <div className={styles.subtitleheading}>
            <div className={styles.div2}>Куда</div>
            <div className={styles.div3}>Рим</div>
          </div>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px.svg"
          />
        </div>
        <div className={styles.line4}>
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.fieldsData}>
          <div className={styles.field4}>
            <div className={styles.subtitleheading}>
              <div className={styles.div2}>Дата туда</div>
              <div className={styles.div3}>23 мая</div>
            </div>
            <img
              className={styles.icons16px}
              alt=""
              src="../icons/icons-16px7.svg"
            />
          </div>
          <div className={styles.line}>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.field4}>
            <div className={styles.subtitleheading}>
              <div className={styles.div2}>Дата обратно</div>
              <div className={styles.div3}>24 мая</div>
            </div>
            <img
              className={styles.icons16px}
              alt=""
              src="../icons/icons-16px.svg"
            />
          </div>
        </div>
        <div className={styles.line4}>
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.field2}>
          <div className={styles.subtitleheading}>
            <div className={styles.div2}>Пассажиры, класс</div>
            <div className={styles.div3}>1 пассажир</div>
          </div>
          <img
            className={styles.icons16px}
            alt=""
            src="../icons/icons-16px.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
