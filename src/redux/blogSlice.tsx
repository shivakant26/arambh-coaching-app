import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instance1 } from "../api/apiConfig";

export interface CounterState {
  posts: string[];
  loading: boolean;
  error: string;
}

const initialState: CounterState = {
  posts: [],
  loading: false,
  error: "",
};

export const getPost = createAsyncThunk<string[]>("blog/blogSlice", async (_,{rejectWithValue}) => {
  try {
    const response = await Instance1.get("/post");
    return response.data;
  } catch (error) {
    return rejectWithValue("An error occurred.");
  }
});

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPost.fulfilled,
        (state, action: PayloadAction<string[]>) => {
            state.loading = false;
          state.posts = action.payload;
        }
      )
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred.";
      });
  },
});

export default blogSlice.reducer;