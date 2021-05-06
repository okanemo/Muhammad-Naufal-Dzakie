import React, { useState } from "react";
import styles from "../styles/Invest.module.css";

const Withdraw = () => {
  const [sellAmmount, setSellAmmount] = useState(0);

  const handleChange = (e) => {
    setSellAmmount(e.target.value);
  };

  return (
    <>
      <form>
        <h2>Withdraw</h2>
        <input
          name="sell"
          value={sellAmmount}
          placeholder="Hello"
          onChange={handleChange}
        ></input>
        <button type="submit" className={styles.btn}>
          Sell
        </button>
      </form>
    </>
  );
};

export default Withdraw;
