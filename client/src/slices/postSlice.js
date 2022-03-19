import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// postSlice
export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "/api/post",{
          headers: {
            token: localStorage.getItem("token"),
          },
      
        });
     
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// get post by owner
export const getPostsByOwner = createAsyncThunk(
  "post/getPostsByOwner",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "/api/post?id="+id,{
          headers: {
            token: localStorage.getItem("token"),
          },
      
        });
     
      return data;
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// add  a new post 
export const addNewPost = createAsyncThunk(
  "post/addNewPost",
  async (postInfo, { rejectWithValue,dispatch }) => {
    try {
       const {data} =await axios.post(
        "/api/post",postInfo,)
        return  dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// delete post 
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (postId, { rejectWithValue,dispatch }) => {
    try {
       const {data} =await axios.delete(
        "/api/post?id="+postId,
        {
          headers: {
            token: localStorage.getItem("token"),}})
        return  dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
//  update post 
export const updatePost = createAsyncThunk(
  "post/updatePost",
  async (postInfo, { rejectWithValue,dispatch }) => {
    try {
       const {data} =await axios.put(
        "/api/post?id="+postInfo.id,postInfo,
        {
          headers: {
            token: localStorage.getItem("token"),}})
        return  dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// add a comment to a post 
export const addComment = createAsyncThunk(
  "post/addComment",
  async (commentInfo, { rejectWithValue,dispatch }) => {
    try {
       await axios.post(
        `/api/comment/newcomment/${commentInfo.postId}`,
        {desc:commentInfo.desc},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
      
        });
     
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);
// delete comment  
export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async (info, { rejectWithValue,dispatch }) => {
    try {
       await axios.delete(
        `/api/comment/${info.postId}/${info.commentId}`
        ,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
      
        });
     
      return dispatch(getPosts());
    } catch (errors) {
      return rejectWithValue(errors.response.data.msg);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    postList:[],
    errors: null,
    
  },
 
  extraReducers: {
    [getPosts.pending]: (state, a) => {
        state.loading = true;
      },
    [getPosts.fulfilled]: (state, action) => {
        state.loading = false
      state.postList = action.payload
      state.errors=null
    },
    [getPosts.rejected]: (state, action) => {
        state.loading = false
        state.errors = action.payload;
      },
      [getPostsByOwner.pending]: (state, a) => {
        state.loading = true;
      },
    [getPostsByOwner.fulfilled]: (state, action) => {
        state.loading = false
      state.postList = action.payload
      state.errors=null
    },
    [getPostsByOwner.rejected]: (state, action) => {
        state.loading = false
        state.errors = action.payload;
      },
   
  
},
});
export default postSlice.reducer;
