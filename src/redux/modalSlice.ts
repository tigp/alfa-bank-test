/* eslint no-param-reassign: "error" */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './index';

interface modalState {
  isShow: boolean,
  targetId: string,
}

const initialState: modalState = {
  isShow: false,
  targetId: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<string>) => {
      state.isShow = true;
      state.targetId = payload;
    },
    closeModal: (state) => {
      state.isShow = false;
      state.targetId = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state: RootState) => state.modal;
export default modalSlice.reducer;
