import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: rootReducer,
  });
  
  export type AppState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;


