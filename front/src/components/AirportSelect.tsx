import { FunctionComponent, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CSS, { Property } from "csstype";
import Select from "../components/Select";
import AirportSelectDropdown from "../components/AirportSelectDropdown";
import styles from "./AirportSelect.module.css";

type AirportSelectType = {
  /** Style props */
  fieldBorderRadius?: Property.BorderRadius;
  fieldCursor?: Property.Cursor;
  fieldWidth?: Property.Width;
};

const AirportSelect: FunctionComponent<AirportSelectType> = ({
  fieldBorderRadius,
  fieldCursor,
  fieldWidth,
}) => {
  const navigate = useNavigate();
  const field4Style: CSS.Properties = useMemo(() => {
    return {
      borderRadius: fieldBorderRadius,
      cursor: fieldCursor,
      width: fieldWidth,
    };
  }, [fieldBorderRadius, fieldCursor, fieldWidth]);

  const onField2Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className={styles.field} onClick={onField2Click} style={field4Style}>
      <Select
        label="Куда"
        value="Рим"
        fieldBorder="2px solid var(--blue-007aff)"
        fieldBorderRadius="unset"
        fieldCursor="unset"
        fieldFlex="unset"
        fieldAlignSelf="stretch"
        fieldOverflow="hidden"
        fieldZIndex="0"
        subtitleheadingOverflow="unset"
        subtitleheadingWhiteSpace="unset"
        subtitleheadingTextOverflow="unset"
        componentAlignSelf="stretch"
        componentAlignSelf1="stretch"
        icons16px="../icons/icons-16px40.svg"
      />
      <AirportSelectDropdown />
    </div>
  );
};

export default AirportSelect;
