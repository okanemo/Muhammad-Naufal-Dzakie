import React from "react";
import styles from "../styles/MarketList.module.css";

function MarketList({ market }) {
  return (
    <>
      <div className={styles.card}>
        <h2>Tesla</h2>
        <h3>NAB : 2.6</h3>
      </div>
      <div className={styles.card}>
        <h2>Amazon</h2>
        <h3>NAB : 4.6</h3>
      </div>
    </>
  );
}

export default MarketList;

export function getServerSideProps(context) {
  return {
    props: {
      market: [],
    },
  };
}
