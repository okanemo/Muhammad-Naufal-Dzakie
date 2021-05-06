import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Invest from "../components/Invest";
import Info from "../components/Info";
import Link from "next/link";

import React, { useContext } from "react";
import { DataContext } from "../store/GlobalState";

export default function Home() {
  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;

  return (
    <>
      {Object.keys(auth).length === 0 ? (
        <Link href="/login">Please Sign In</Link>
      ) : (
        <Link href="/portfolio">Go To Portfolio</Link>
      )}
    </>
  );
}
