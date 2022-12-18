/* eslint no-param-reassign: "error" */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';

interface Height {
  imperial: string;
  metric: number;
}

type DogItem = {
  image: {
    height: number;
    id: string;
    url: string;
    width: number;
  };
  height: Height;
  dogId: string;
  temperament: string;
  lifeSpan: string;
  name: string;
  isLiked: boolean;
};

interface DogsState {
  dogsList: DogItem[];
  filterState: string,
}

const initialState: DogsState = {
  dogsList: [],
  filterState: 'all', // all -> favorites (Automata machine state)
};

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    getDogs: (state, { payload }: PayloadAction<DogItem>) => {
      state.dogsList.push(payload);
    },
    setLikeToDog: (state, { payload }: PayloadAction<string>) => {
      const targetDog = state.dogsList.find(({ dogId }) => dogId === payload);
      if (targetDog) {
        targetDog.isLiked = !targetDog.isLiked;
      }
    },
    removeDog: (state, { payload }: PayloadAction<string>) => {
      const filteredDogs = state.dogsList.filter(({ dogId }) => dogId !== payload);
      state.dogsList = [...filteredDogs];
    },
    changeFilter: (state, { payload }: PayloadAction<string>) => {
      state.filterState = payload;
    },
  },
});

export const {
  getDogs,
  setLikeToDog,
  removeDog,
  changeFilter,
} = dogsSlice.actions;
export const dogsSelector = (state: RootState) => state.dogs;
export default dogsSlice.reducer;
