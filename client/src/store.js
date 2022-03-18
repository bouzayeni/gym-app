import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postSlice";
import adminReducer from "./slices/adminSlice";

export default configureStore({ reducer: { user: userReducer,post:postReducer,admin:adminReducer } });