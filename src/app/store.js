import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "../features/greeting/greetingSlice";

export default configureStore({
  reducer: {
    greet: greetingReducer,
  },
});
