import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import styles from "../styles/Auth.module.css";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
const login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { email, password } = userData;
    e.preventDefault();

    dispatch({
      type: "NOTIFY",
      payload: { loading: true },
    });
    const res = await postData("auth/login", userData);
    if (res.err)
      return dispatch({
        type: "NOTIFY",
        payload: { error: true, type: "error", message: res.err.toString() },
      });
    dispatch({
      type: "NOTIFY",
      payload: { success: true, type: "success", message: "Login Sukses" },
    });
    dispatch({
      type: "AUTH",
      payload: { token: res.access_token, user: res.user },
    });
    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="username" className={styles.label}>
            Email :
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
            Password :
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
        <button type="submit" className={styles.btn}>
          Submit
        </button>
        <p>
          Does Not Have an Account Yet?{" "}
          <Link href="/register">Register Here!</Link>
        </p>
      </form>
    </>
  );
};

export default login;
