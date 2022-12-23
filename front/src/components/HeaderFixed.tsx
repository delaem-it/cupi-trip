import { FunctionComponent } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import styles from "./HeaderFixed.module.css";

const HeaderFixed: FunctionComponent = () => {
  return (
    <div className={styles.headerCatalogTickets}>
      <Header
        headerBackgroundColor="var(--white-ffffff)"
        component="icons/----213.svg"
        icons24px="icons/icons-24px9.svg"
        vector194Stroke="../icons/vector-194-stroke9.svg"
        vector195Stroke="../icons/vector-194-stroke9.svg"
        vector196Stroke="../icons/vector-194-stroke9.svg"
      />
      <div className={styles.searchDropdown}>
        <SearchBar
          fieldBoxShadow="unset"
          fieldBorder="1px solid var(--gray-d5d7e2)"
          fieldBoxSizing="border-box"
          fieldOverflow="hidden"
          fieldBoxShadow1="unset"
          fieldBorder1="1px solid var(--gray-d5d7e2)"
          fieldOverflow1="hidden"
          icons20px="../icons/icons-20px25.svg"
          fieldsearchmobileBoxShadow="unset"
          fieldsearchmobileBorder="1px solid var(--gray-d5d7e2)"
          fieldsearchmobileBoxSizing="border-box"
          fieldsearchmobileOverflow="hidden"
        />
      </div>
    </div>
  );
};

export default HeaderFixed;
