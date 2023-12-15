import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      user:userSlice,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
