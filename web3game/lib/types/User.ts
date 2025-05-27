export interface User{
    username: string
    image: any
    coin: string
    balance: number
}

export interface authStateType {
	isAuthenticated: boolean;
	isAuthenticating: boolean;
	token: null | string;
	user: null | User;
}