import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blog/blogSlice";
import projectSlice from "../features/project/projectSlice";

const store = configureStore({
  reducer: {
    blog: blogSlice,
    project: projectSlice,
  },
});

export default store;
