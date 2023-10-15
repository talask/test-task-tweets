import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = "https://64ac6cd59edb4181202f873a.mockapi.io/contacts/";




export const fetchUsers = createAsyncThunk("users/fetchAll",
     async({limit, page}, thunkAPI) => {
    
        try {
            const response = await axios.get(`/users?page=${page}&limit=${limit}`); 
           
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
      }
});


export const updateUser = createAsyncThunk("users/update",
  async ({id, followers}, thunkAPI) => {
    
    try {
        const response = await axios.put(`/users/${id}`, {followers});
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});