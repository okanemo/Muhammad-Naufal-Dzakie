import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import Notify from "../components/Notify";
import { DataProvider } from "../store/GlobalState";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Notify />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
