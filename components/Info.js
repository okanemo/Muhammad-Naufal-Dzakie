import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import styles from "../styles/Portfolio.module.css";
import { getData } from "../utils/fetchData";

const Info = () => {
  const { state, dispatch } = useContext(DataContext);
  const [balance, setBalance] = useState("");
  const { auth } = state;
  useEffect(async () => {
    // if (Object.keys(auth) !== 0) console.log(auth);
    console.log(auth);
    console.log(auth.user.id);
    const req = await getData("market");

    let result = req.result.filter((obj) => {
      return obj.user === auth.user.id;
    });

    result = result.reduce((acc, res) => {
      return acc + res.transaction;
    }, 0);

    // const result = req.result.reduce((acc, res) => {
    //   return acc + res.transaction;
    // }, 0);
    setBalance(result);
  }, []);

  return (
    <div className={styles.card}>
      <h2>Balance</h2>
      <p>Rp.{balance ? balance : "0"}</p>
    </div>
  );
};

export default Info;
