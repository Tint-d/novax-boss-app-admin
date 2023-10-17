import { configureStore } from "@reduxjs/toolkit";
// import { pokemonApi } from "./api/userApi";
import counterSlice from "./services/counterSlice";
import { adminApi } from "./api/adminApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
