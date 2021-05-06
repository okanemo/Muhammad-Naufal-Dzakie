import React, { useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import styles from "../styles/Invest.module.css";

const Invest = () => {
  const [buyAmmount, setBuyAmmount] = useState(0);
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const handleChange = (e) => {
    setBuyAmmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postData("market", {
      user: auth.user.id,
      balance: buyAmmount,
      type: "BUY",
    });
    if (res.err) console.log(res.err);
    console.log(res);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Invest</h2>
        <input
          name="buy"
          value={buyAmmount}
          placeholder="Hello"
          onChange={handleChange}
        ></input>
        <button type="submit" className={styles.btn}>
          Buy
        </button>
      </form>
    </>
  );
};

export default Invest;
