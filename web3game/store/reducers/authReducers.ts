import { authStateType,User } from "@/lib/types/User";
import {createSlice,PayloadAction} from "@reduxjs/toolkit";

const initialState:authStateType = {
    isAuthenticated: false,
    isAuthenticating: false,
    token: null,
    user: null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
			state.isAuthenticated = action.payload;
		},
		setIsAuthenticating: (state, action: PayloadAction<boolean>) => {
			state.isAuthenticating = action.payload;
		},
		setToken: (state, action: PayloadAction<null | string>) => {
			state.token = action.payload;
		},
		setUser: (state, action: PayloadAction<null | User>) => {
			state.user = action.payload;
		},
    }
})

export const { setIsAuthenticated, setIsAuthenticating, setToken, setUser } =
	authSlice.actions;
export default authSlice.reducer;	