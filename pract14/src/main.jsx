import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    items: [
      { id: 1, name: "Aarav Sharma", email: "aarav@example.com", course: "B.Sc. Computer Science", year: "2" },
      { id: 2, name: "Isha Patel", email: "isha@example.com", course: "BCA", year: "1" },
      { id: 3, name: "Rohan Sen", email: "rohan@example.com", course: "MCA", year: "1" }
    ]
  },
  reducers: {
    addStudent(state, action) { state.items.push({ ...action.payload, id: Date.now() }); },
    updateStudent(state, action) {
      const index = state.items.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
    deleteStudent(state, action) { state.items = state.items.filter(s => s.id !== action.payload); }
  }
});
export const { addStudent, updateStudent, deleteStudent } = studentsSlice.actions;
const store = configureStore({ reducer: { students: studentsSlice.reducer } });

createRoot(document.getElementById("root")).render(
  <React.StrictMode><Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider></React.StrictMode>
);
