import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/data";

const categorySlice = createSlice({
  name: "categories",
  initialState: categories,
  reducers: {},
});

export default categorySlice.reducer;
