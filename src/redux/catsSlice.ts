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
  name: 'cats',
  initialState,
  reducers: {
    setCats: (state, { payload }: PayloadAction<object>) => {
      state.catsList.push(payload);
    },
  },
});

export const { setCats } = catsSlice.actions;
export const catsSelector = (state: RootState) => state.cats; // ?????
export default catsSlice.reducer;
