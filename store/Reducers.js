import ACTIONS from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONS.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONS.BUY:
      return {
        ...state,
        auth: action.payload,
      };
    case ACTIONS.SELL:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
