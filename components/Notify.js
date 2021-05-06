import { useContext, useCallback } from "react";

import { DataContext } from "../store/GlobalState";
import Loading from "./Loading";
import Toast from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const {
    notify: { success, error, loading, type, message },
  } = state;
  const closeHandle = () => {
    dispatch({
      type: "NOTIFY",
      payload: {},
    });
  };
  const runToast = useCallback(() => {
    Toast({ type, message, closeHandle });
  });
  const dismiss = useCallback(() => {
    Toast.dismiss();
  }, []);
  return (
    <>
      {loading && <Loading />}
      {error && runToast()}
      {success && runToast()}
    </>
  );
};

export default Notify;
