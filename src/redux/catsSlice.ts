import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';

type CatItem = {
  image: object;
  description: string;
  name: string;
  type: string;
};

interface CatsState {
  catsList: CatItem[];
}

const initialState: CatsState = {
  catsList: [],
};

export const catsSlice = createSlice({
  name: 'gifs',
  initialState,
  reducers: {
    setCats: (state, { payload }: PayloadAction<object>) => {
      console.log(payload);
    },
  },
});

export const { setCats } = catsSlice.actions;
export const selectCount = (state: RootState) => state; // ?????
export default catsSlice.reducer;
