import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './catsSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    cats: catsReducer,
    modal: modalReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
