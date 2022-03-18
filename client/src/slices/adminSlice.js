import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// load users informations
export const loadUserInfos = createAsyncThunk(
    "admin/loadUserInfos",
    async (info, { rejectWithValue }) => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/admin/personInfos",
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        return data;
      } catch (errors) {
        return rejectWithValue(errors.response.data.msg);
      }
    }
  );

  const adminSlice = createSlice({
    name: "admin",
    initialState: {
      userList:[],
      loading: false,
      errors: null,
    
    },
  
    extraReducers: {
     
    
    // load user information
    [loadUserInfos.pending]: (state, a) => {
        state.loading = true;
      },
    [loadUserInfos.fulfilled]: (state, action) => {
      
         state.userList = action.payload;
         state.loading = false;
                state.errors=null
           },
    [loadUserInfos.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false
    },
   
  },
  });
  export default adminSlice.reducer;
  