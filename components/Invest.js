import React, { useState } from "react";
import styles from "../styles/Invest.module.css";

const Invest = () => {
  const [buyAmmount, setBuyAmmount] = useState(0);

  const handleChange = (e) => {
    setBuyAmmount(e.target.value);
  };

  return (
    <>
      <h2>Invest</h2>
      <input placeholder="Hello" onChange={handleChange}></input>
      <button className={styles.btn}>Buy</button>
    </>
  );
};

export default Invest;
