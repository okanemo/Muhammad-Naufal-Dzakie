import { useContext } from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import { DataContext } from "../store/GlobalState";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  const { state, dispatch } = useContext(DataContext);

  const { auth } = state;

  const handleSignOut = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({
      type: "NOTIFY",
      payload: { success: true, type: "success", message: "Logout Berhasil" },
    });
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {Object.keys(auth).length !== 0 && (
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        )}
        <li>
          {Object.keys(auth).length === 0 ? (
            <Link href="/login">Sign In</Link>
          ) : (
            <a onClick={handleSignOut}>Sign Out</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
