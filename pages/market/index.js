import React from "react";
import styles from "../../styles/Market.module.css";
import MarketList from "../../components/MarketList";
function index() {
  return (
    <div className={styles.grid}>
      <MarketList />
    </div>
  );
}

export default index;
