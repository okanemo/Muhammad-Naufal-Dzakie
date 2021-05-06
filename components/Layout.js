import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";
// import Notify from "../components/Notify";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nozomu</title>
      </Head>
      <Nav />

      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Notify /> */}
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
