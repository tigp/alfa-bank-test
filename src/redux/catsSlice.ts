/* eslint no-param-reassign: "error" */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';

type CatItem = {
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  catId: string,
  description: string;
  name: string;
  isLiked: boolean;
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
    getCats: (state, { payload }: PayloadAction<CatItem>) => {
      state.catsList.push(payload);
    },
    setLikeToCat: (state, { payload }: PayloadAction<string>) => {
      const targetCat = state.catsList.find(({ catId }) => catId === payload);
      if (targetCat) {
        targetCat.isLiked = !targetCat.isLiked;
      }
    },
    removeCat: (state, { payload }: PayloadAction<string>) => {
      const filteredCats = state.catsList.filter(({ catId }) => catId !== payload);
      state.catsList = [...filteredCats];
    },
  },
});

export const { getCats, setLikeToCat, removeCat } = catsSlice.actions;
export const catsSelector = (state: RootState) => state.cats;
export default catsSlice.reducer;
