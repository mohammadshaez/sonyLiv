import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "mylist",
  initialState: { myWatchlist: [] },
  reducers: {
    addToList: (state, action) => {
      const dataArray = action.payload;
      console.log("dataArray ",dataArray)
      const ids = dataArray.map((item) => item._id);
      console.log("ids",ids)
      // console.log("watchlist", state.myWatchlist);
      ids.map((id) => {
        if (!state.myWatchlist.includes(id)) {
          state.myWatchlist.push(id);
        }
      });
    },
    removeFromList: (state, action) => {
      const id = action.payload;
      console.log("remove list id", id)
      state.myWatchlist = state.myWatchlist.filter((item) => item !== id);
    },
    resetWatchlist: (state) => {
      state.myWatchlist = [];
    },
  },
});

export const { addToList, removeFromList, resetWatchlist } = listSlice.actions;

export default listSlice.reducer;
