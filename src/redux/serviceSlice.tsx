import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Instance from "../api/apiConfig";

export interface CounterState {
  data: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

const initialState: CounterState = {
  data: [],
  status: "idle",
  error: "",
};

export const getData = createAsyncThunk<string[]>("api/serviceSlice", async (_,{rejectWithValue}) => {
  try {
    const response = await Instance.get("/todos");
    return response.data;
  } catch (error) {
    return rejectWithValue("An error occurred.");
  }
});

export const serviceSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getData.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred.";
      });
  },
});

export default serviceSlice.reducer;
