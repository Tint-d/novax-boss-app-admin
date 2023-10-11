import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  auth: {
    user: object;
    token: string;
  };
}

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: StateType) => state.auth.user;
export const selectCurrentToken = (state: StateType) => state.auth.token;
