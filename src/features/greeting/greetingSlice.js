import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessage = createAsyncThunk(
  "message/fetchMessage",
  async () => {
    const response = await axios.get("http://localhost:4000/api/v1/greeting_random");
    return response.data;
  }
);

export const greetingSlice = createSlice({
  name: "message",
  initialState: { message: "", status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.content;
      });
  },
});

export default greetingSlice.reducer;
