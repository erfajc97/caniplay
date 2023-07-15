import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feactures/auth/auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
