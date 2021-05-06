import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import { DataProvider } from "../store/GlobalState";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
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
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
