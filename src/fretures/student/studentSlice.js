import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "./studentApiSlice";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: [],
    loading: false,
    message: null,
    error: null,
  },

  reducers: {},

  extraReducers: (buider) => {
    buider
      .addCase(createStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = [...state.student, action.payload];
        state.message = "Student created success-ful";
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllStudents.pending, (state, acion) => {
        state.loading = true;
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.student = [...action.payload];
      })
      .addCase(getAllStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = state.student.filter(
          (data) => data.id !== action.payload.id
        );
        state.message = "studdent data deleted confirmed";
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateStudent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student[
          state.student.findIndex((data) => data.id === action.payload.id)
        ] = action.payload;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// action selector
export const selectStudent = (state) => state.student;

// export action

// exporet reducer
export default studentSlice.reducer;
