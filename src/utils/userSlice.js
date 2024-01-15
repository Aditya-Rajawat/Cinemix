import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      // add the user to our redux store
      return action.payload;
    },
    removeUser: (state, action) => {
      // removes the user from our redux store
      return null;
    },
  },
});

export const {addUser,removeUser}=UserSlice.actions;

export default UserSlice.reducer;
