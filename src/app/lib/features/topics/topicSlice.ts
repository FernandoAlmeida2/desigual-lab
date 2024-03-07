import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TopicState = {
  currentTopic: string;
};

const initialState: TopicState = {
  currentTopic: "initial",
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    changeTopic(state, action: PayloadAction<string>) {
      return { ...state, currentTopic: action.payload };
    },
  },
});

export const { changeTopic } = topicSlice.actions;