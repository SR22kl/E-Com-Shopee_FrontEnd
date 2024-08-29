import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReducerInitialState } from "../../types/reducerTypes";
import { User } from "../../types/types";

const initialState:UserReducerInitialState = {
  user: null,
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userExists: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state) => {
      state.loading = false;
      state.user = null
    },
  },
});

export const { userExists, userNotExist } = userReducer.actions;
 