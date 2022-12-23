import { FunctionComponent, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CSS, { Property } from "csstype";
import styles from "./Select.module.css";

type SelectType = {
  label?: string;
  value?: string;
  icons16px?: string;

  /** Style props */
  fieldBorder?: Property.Border;
  fieldBorderRadius?: Property.BorderRadius;
  fieldCursor?: Property.Cursor;
  fieldFlex?: Property.Flex;
  fieldAlignSelf?: Property.AlignSelf;
  fieldOverflow?: Property.Overflow;
  fieldZIndex?: Property.ZIndex;
  subtitleheadingOverflow?: Property.Overflow;
  subtitleheadingWhiteSpace?: Property.WhiteSpace;
  subtitleheadingTextOverflow?: Property.TextOverflow;
  componentAlignSelf?: Property.AlignSelf;
  componentWhiteSpace?: Property.WhiteSpace;
  componentOverflow?: Property.Overflow;
  componentTextOverflow?: Property.TextOverflow;
  componentAlignSelf1?: Property.AlignSelf;
};

const Select: FunctionComponent<SelectType> = ({
  label,
  value,
  fieldBorder,
  fieldBorderRadius,
  fieldCursor,
  fieldFlex,
  fieldAlignSelf,
  fieldOverflow,
  fieldZIndex,
  subtitleheadingOverflow,
  subtitleheadingWhiteSpace,
  subtitleheadingTextOverflow,
  componentAlignSelf,
  componentWhiteSpace,
  componentOverflow,
  componentTextOverflow,
  componentAlignSelf1,
  icons16px,
}) => {
  const navigate = useNavigate();
  const fieldStyle: CSS.Properties = useMemo(() => {
    return {
      border: fieldBorder,
      borderRadius: fieldBorderRadius,
      cursor: fieldCursor,
      flex: fieldFlex,
      alignSelf: fieldAlignSelf,
      overflow: fieldOverflow,
      zIndex: fieldZIndex,
    };
  }, [
    fieldBorder,
    fieldBorderRadius,
    fieldCursor,
    fieldFlex,
    fieldAlignSelf,
    fieldOverflow,
    fieldZIndex,
  ]);

  const subtitleheadingStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: subtitleheadingOverflow,
      whiteSpace: subtitleheadingWhiteSpace,
      textOverflow: subtitleheadingTextOverflow,
    };
  }, [
    subtitleheadingOverflow,
    subtitleheadingWhiteSpace,
    subtitleheadingTextOverflow,
  ]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      alignSelf: componentAlignSelf,
    };
  }, [componentAlignSelf]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      whiteSpace: componentWhiteSpace,
      overflow: componentOverflow,
      textOverflow: componentTextOverflow,
      alignSelf: componentAlignSelf1,
    };
  }, [
    componentWhiteSpace,
    componentOverflow,
    componentTextOverflow,
    componentAlignSelf1,
  ]);

  const onField1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <button className={styles.field} onClick={onField1Click} style={fieldStyle}>
      <div className={styles.subtitleheading} style={subtitleheadingStyle}>
        <div className={styles.div} style={div1Style}>
          {label}
        </div>
        <div className={styles.div1} style={div2Style}>
          {value}
        </div>
      </div>
      <img className={styles.icons16px} alt="" src={icons16px} />
    </button>
  );
};

export default Select;
