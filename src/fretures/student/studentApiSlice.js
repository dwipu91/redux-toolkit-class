import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllStudents = createAsyncThunk(
  "student/getAllStudents",
  async () => {
    try {
      const respons = await axios.get(`http://localhost:7000/students`);
      return respons.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const createStudent = createAsyncThunk(
  "studnet/createStudent",
  async (data) => {
    try {
      const respons = await axios.post(`http://localhost:7000/students`, data);
      return respons.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// delete student
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id) => {
    try {
      const respons = await axios.delete(
        `http://localhost:7000/students/${id}`
      );
      return respons.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// student update
export const updateStudent = createAsyncThunk(
  "student/updateStudent",
  async (data) => {
    try {
      const respons = await axios.patch(
        `http://localhost:7000/students/${data.id}`,
        data
      );
      return respons.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
