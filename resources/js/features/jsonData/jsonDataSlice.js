import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jsonData: {categories: [], posts: []} // Initialize your state here
};

const jsonDataSlice = createSlice({
  name: 'jsonData',
  initialState,
  reducers: {
    setJsonData: (state, action) => {
      state.jsonData = action.payload;
    }
  }
});

export const { setJsonData } = jsonDataSlice.actions;
export default jsonDataSlice.reducer;

