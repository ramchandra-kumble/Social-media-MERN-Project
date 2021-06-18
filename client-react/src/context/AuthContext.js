import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITAIL_STATE = {
  user: {
    _id: "60cbafbe8b67f53bc42bb912",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    username: "test",
    email: "test@gmail.com",
  },
  isFetching: false,
  error: false,
};

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
