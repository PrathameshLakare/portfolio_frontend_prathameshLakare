import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL;

export const fetchProjects = createAsyncThunk("projects", async () => {
  const response = await axios.get(`${url}/project`);

  return response.data;
});

const projectlice = createSlice({
  name: "blog",
  initialState: {
    projects: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.status = "success";
      state.projects = action.payload.projects;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default projectlice.reducer;
