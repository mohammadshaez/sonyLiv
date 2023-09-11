import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userToken: "",
  isFetching: false,
  error: false,
  watchlist: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.userToken = action.payload;
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.currentUser = null;
      console.log(state.watchlist)
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { addToken, loginStart, loginSuccess, loginFailed } =
  userSlice.actions;

export default userSlice.reducer;
