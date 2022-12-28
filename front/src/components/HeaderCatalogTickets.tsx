import { FunctionComponent } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import styles from "./HeaderCatalogTickets.module.css";

const HeaderCatalogTickets: FunctionComponent = () => {
  return (
    <div className={styles.headerCatalogTickets}>
      <div className={styles.gradientHome}>
        <img
          className={styles.headerhome1Icon}
          alt=""
          src="../headerhome-1@2x.png"
        />
      </div>
      <div className={styles.home}>
        <Header
          component="icons/----2.svg"
          icons24px="icons/icons-24px.svg"
          vector194Stroke="../icons/vector-194-stroke.svg"
          vector195Stroke="../icons/vector-194-stroke.svg"
          vector196Stroke="../icons/vector-194-stroke.svg"
        />
        <div className={styles.searchDropdown}>
          <SearchBar icons20px="../icons/icons-20px.svg" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCatalogTickets;
