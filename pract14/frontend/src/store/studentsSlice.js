import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addStudent(state, action) {
      state.items.unshift(action.payload);
    },
    updateStudent(state, action) {
      const index = state.items.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) state.items[index] = action.payload;
    },
    removeStudent(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    }
  }
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  addStudent,
  updateStudent,
  removeStudent
} = studentsSlice.actions;

export default studentsSlice.reducer;
