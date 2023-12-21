/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataType } from 'types';
import { Home } from '../types';

type HomeState = {
  dataList: DataType;
  isLoading: boolean;
};

const initialState: HomeState = {
  dataList: {} as DataType,
  isLoading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    getDataList(state: HomeState) {
      state.isLoading = true;
    },
    getDataListSuccess(
      state: HomeState,
      action: PayloadAction<Home.GetDataSuccessPayload>
    ) {
      state.isLoading = false;
      state.dataList = action.payload;
    },
    getDataListError(
      _state: HomeState,
      _action: PayloadAction<Home.GetDataFailPayload>
    ) {
      _state.isLoading = false;
    },
  },
});

export const actions = homeSlice.actions;
export const reducer = homeSlice.reducer;
