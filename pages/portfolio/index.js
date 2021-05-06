import Head from "next/head";
import Info from "../../components/Info";
import Invest from "../../components/Invest";
import Withdraw from "../../components/Withdraw";
import styles from "../../styles/Portfolio.module.css";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../store/GlobalState";

const Portfolio = () => {
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const { auth } = state;

  useEffect(() => {
    if (Object.keys(auth).length === 0) router.push("/");
  }, [auth]);

  return (
    <>
      <div className={styles.grid}>
        <Info />
        <div className={styles.card}>
          <Invest />
        </div>
        <div className={styles.card}>
          <Withdraw />
        </div>
      </div>
    </>
  );
};

export default Portfolio;

// export function getServerSideProps(context) {
//   return {
//     props: {
//       portfolio: [],
//     },
//   };
// }
