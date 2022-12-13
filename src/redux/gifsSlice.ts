import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type GifsItem = {
  id: string;
  type: string;
  url: string;
};

interface gifsState {
  gifs: GifsItem[];
}

const initialState: gifsState = {
  gifs: [],
};

const gifsSlice = createSlice({
  name: 'gifs',
  initialState,
  reducers: {
    setGifs: (state, { payload }: PayloadAction<GifsItem>) => {
      console.log(payload);
    },
  },
});

export const { setGifs } = gifsSlice.actions;

export default gifsSlice.reducer;

export const gifsSelector = (state: { gifsStore: gifsState }) => state.gifsStore;