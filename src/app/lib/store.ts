import { configureStore } from "@reduxjs/toolkit";
import { topicSlice } from "../lib/features/topics/topicSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      topic: topicSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
