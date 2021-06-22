import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITAIL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

if (typeof localStorage.getItem("user") == "undefined") {
  INITAIL_STATE.user = null;
} else {
  INITAIL_STATE.user = JSON.parse(localStorage.getItem("user"));
}

export const AuthContext = createContext(INITAIL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITAIL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
