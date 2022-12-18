import { configureStore } from '@reduxjs/toolkit';
import dogsReducer from './dogsSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    modal: modalReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
