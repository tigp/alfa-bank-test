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
    setLikeToCat: (state, { payload }: PayloadAction<string>) => { // payload = catId: string
      const targetCat = state.catsList.find(({ catId }) => catId === payload);
      if (targetCat) {
        targetCat.isLiked = !targetCat.isLiked;
      }
    },
  },
});

export const { getCats, setLikeToCat } = catsSlice.actions;
export const catsSelector = (state: RootState) => state.cats;
export default catsSlice.reducer;
