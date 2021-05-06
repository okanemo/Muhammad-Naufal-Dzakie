import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <>
      <h1 className={styles.title}>
        <a href="https://okanemo.com">Okanemo</a> Investment
      </h1>
      <p className={styles.description}>Hello User!</p>
    </>
  );
}

export default Header;
