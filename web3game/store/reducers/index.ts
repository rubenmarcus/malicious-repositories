import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducers';
import sidebarReducer from './sidebarReducer';
// Import other reducers if you have more than one

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  // Add other reducers here if you have more than one
});

export default rootReducer;