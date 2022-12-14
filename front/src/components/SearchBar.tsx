import { FunctionComponent, useMemo } from 'react';
import CSS, { Property } from 'csstype';
import Select from '../components/Select';
import Button from '../components/Button';
import styles from './SearchBar.module.css';

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
                    label="????????????"
                    value="????????????"
                    icons16px="../icons/icons-16px.svg"
                />
                <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                </div>
                <Select
                    label="????????"
                    value="??????"
                    fieldBorder="unset"
                    fieldBorderRadius="var(--br-md)"
                    icons16px="../icons/icons-16px.svg"
                />
                <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                </div>
                <Select
                    label="???????? ????????"
                    value="23 ??????"
                    fieldBorderRadius="var(--br-md)"
                    icons16px="../icons/icons-16px.svg"
                />
                <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                </div>
                <Select
                    label="???????? ??????????????"
                    value="24 ??????"
                    fieldBorderRadius="var(--br-md)"
                    icons16px="../icons/icons-16px.svg"
                />
                <div className={styles.line}>
                    <div className={styles.rectangleDiv} />
                </div>
                <Select
                    label="??????????????????, ??????????"
                    value="1 ????????????????"
                    fieldBorder="unset"
                    fieldBorderRadius="var(--br-md)"
                    fieldCursor="unset"
                    icons16px="../icons/icons-16px.svg"
                />
            </div>
            <div className={styles.field1} style={field2Style}>
                <div className={styles.subtitleheading}>
                    <div className={styles.div}>???????????? - ??????</div>
                    <div className={styles.div1}>
                        23 ???????????? - 24 ????????????, 1 ????????????????, ????????????
                    </div>
                </div>
                <img className={styles.icons20px} alt="" src={icons20px} />
            </div>
            <Button style={{width:"164px"}}>??????????</Button>
            <div
                className={styles.fieldsearchmobile}
                style={fieldsearchmobileStyle}
            >
                <div className={styles.field2}>
                    <div className={styles.subtitleheading}>
                        <div className={styles.div2}>????????????</div>
                        <div className={styles.div3}>????????????</div>
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
                        <div className={styles.div2}>????????</div>
                        <div className={styles.div3}>??????</div>
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
                            <div className={styles.div2}>???????? ????????</div>
                            <div className={styles.div3}>23 ??????</div>
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
                            <div className={styles.div2}>???????? ??????????????</div>
                            <div className={styles.div3}>24 ??????</div>
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
                        <div className={styles.div2}>??????????????????, ??????????</div>
                        <div className={styles.div3}>1 ????????????????</div>
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
