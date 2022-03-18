import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// register
export const registerUser = createAsyncThunk(
  "user/register",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/person/register",
        info.data
      );
      info.navigate("/Login");
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/person/login",
        info.data
      );
      data.role === "user"
        ? info.navigate("/Profile")
        : data.role === "admin" && info.navigate("/Dashboard");
        console.log(data)

      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

// load user information
export const loadUserInfo = createAsyncThunk(
  "user/loadUserInfo",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/person/personInfo",
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
// // load users informations
// export const loadUserInfos = createAsyncThunk(
//   "user/loadUserInfos",
//   async (info, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:5000/api/person/personInfos",
//         {
//           headers: {
//             token: localStorage.getItem("token"),
//           },
//         }
//       );
//       return data;
//     } catch (errors) {
//       return rejectWithValue(errors.response.data.msg);
//     }
//   }
// );

// update profile picture
export const updateProfilePicture = createAsyncThunk(
  "user/updateProfilePicture",
  async (file, { rejectWithValue,dispatch }) => {
    try {
      const formPic = new FormData();
      formPic.append('profilePicture',file);
       await axios.put(
        "http://localhost:5000/api/person/profilePic",
        formPic,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      return dispatch(loadUserInfo());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    
    userInfo: {},
    token: localStorage.getItem("token") || null,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
    errors: null,
    role: localStorage.getItem("role") || null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuth = false;
      state.role = "";
      localStorage.clear();
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.msg = action.payload.msg;
    },
    [registerUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
      localStorage.setItem("connectedUser", JSON.stringify(action.payload.existPerson));
    },
    [loginUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  
  // load user information
  [loadUserInfo.fulfilled]: (state, action) => {
       state.userInfo = action.payload;
         },
  [loadUserInfo.rejected]: (state, action) => {
    state.errors = action.payload;
  },
 
},
});
export default userSlice.reducer;
// destraction of action
export const { logout } = userSlice.actions;