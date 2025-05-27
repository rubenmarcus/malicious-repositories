import imperial from "@/public/assets/images/imperial.png";
import {
  setIsAuthenticated,
  setIsAuthenticating,
  setToken,
  setUser,
} from "../reducers/authReducers";

export const login = (token: string) => {
  return (dispatch: any) => {
    dispatch(setIsAuthenticating(true));

    try {
      // Simulated user data
      const user = {
        username: "mjolnir",
        image: imperial,
        coin: "black",
        balance: 23182.56,
      };

      // Dispatch actions to update Redux store
      dispatch(setIsAuthenticated(true));
      dispatch(setToken(token));
      dispatch(setUser(user));

      dispatch(setIsAuthenticating(false));
    } catch (error) {
      console.error(error);

      // Clearing Redux state on error
      dispatch(setIsAuthenticated(false));
      dispatch(setToken(null));
      dispatch(setUser(null));

      dispatch(setIsAuthenticating(false));
    }
  };
};

export const logout = () => {
  return (dispatch: any) => {
    dispatch(setIsAuthenticating(true));

    // Clearing Redux state
    dispatch(setIsAuthenticated(false));
    dispatch(setToken(null));
    dispatch(setUser(null));

    dispatch(setIsAuthenticating(false));
  };
};
