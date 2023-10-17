import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token") || null;

export interface AuthStateType {
  auth: {
    loading: boolean;
    user: object;
    token: string;
    error: object;
    success: boolean;
  };
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token,
    loading: false,
    success: false,
    error: null,
  },
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

export const selectCurrentUser = (state: AuthStateType) => state.auth.user;
export const selectCurrentToken = (state: AuthStateType) => state.auth.token;
