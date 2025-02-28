import {configureStore} from '@reduxjs/toolkit';
import authReducer from './feature/auth/authSlice';
import appSlice from './feature/app/appSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
   auth:authReducer,
   app:appSlice,
  },
  //@ts-ignore
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
