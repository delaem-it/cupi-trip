import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SkeletonFilter.module.css";

type SkeletonFilterType = {
  /** Style props */
  filterHeight?: Property.Height;
  filterOverflow?: Property.Overflow;
};

const SkeletonFilter: FunctionComponent<SkeletonFilterType> = ({
  filterHeight,
  filterOverflow,
}) => {
  const filter1Style: CSS.Properties = useMemo(() => {
    return {
      height: filterHeight,
      overflow: filterOverflow,
    };
  }, [filterHeight, filterOverflow]);

  return (
    <div className={styles.filter} style={filter1Style}>
      <div className={styles.nameFilter} />
    </div>
  );
};

export default SkeletonFilter;
