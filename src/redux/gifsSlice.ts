import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';

type GifsItem = {
  id: string;
  type: string;
  url: string;
};

interface gifsState {
  items: GifsItem[];
};

// Define the initial state using that type
const initialState: gifsState = {
  items: [],
};

export const gifsSlice = createSlice({
  name: 'gifs',
  initialState,
  reducers: {
    // setGifs: (state, { payload }: PayloadAction<GifsItem>) => {
    //   console.log('gifsSlice!');
    // },
    setGifs: (state) => {
      console.log('gifsSlice!');
    },
  },
});

export const { setGifs } = gifsSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state; // ?????
export default gifsSlice.reducer