import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/CounterSlice";
import logger from "./middleware/logger";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
