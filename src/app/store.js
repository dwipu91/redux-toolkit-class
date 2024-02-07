import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../fretures/student/studentSlice";

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

// export defoult
export default store;
