import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL;

export const fetchBlogs = createAsyncThunk("blogs", async () => {
  const response = await axios.get(`${url}/blog`);

  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.status = "success";
      state.blogs = action.payload.blogs;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
