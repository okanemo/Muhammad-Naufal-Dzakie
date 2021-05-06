import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.css";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";

const register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    cf_password: "",
  });

  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { username, email, password, cf_password } = userData;
    e.preventDefault();
    const errMessage = valid(username, email, password, cf_password);

    if (errMessage)
      return dispatch({
        type: "NOTIFY",
        payload: { error: true, type: "error", message: errMessage },
      });

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });
    const res = await postData("auth/register", userData);
    if (res.err)
      return dispatch({
        type: "NOTIFY",
        payload: { error: true, type: "error", message: res.err.toString() },
      });
    return dispatch({
      type: "NOTIFY",
      payload: { success: true, type: "success", message: "Register Sukses" },
    });
  };

  useState(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <>
      <Head>
        <title>Register Page</title>
      </Head>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            className={styles.input_control}
            type="text"
            name="username"
            value={userData.username}
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email" className={styles.label}>
            email
          </label>
          <input
            className={styles.input_control}
            type="email"
            name="email"
            value={userData.email}
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            className={styles.input_control}
            type="password"
            name="password"
            value={userData.password}
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="cf_password" className={styles.label}>
            Confirm Password
          </label>
          <input
            className={styles.input_control}
            type="password"
            name="cf_password"
            value={userData.cf_password}
            id="cf_password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
        <p>
          Already Have an Account? <Link href="/login">Sign In Here!</Link>
        </p>
      </form>
    </>
  );
};

export default register;
