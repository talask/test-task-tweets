import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateUser } from "./operation";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        page: 1,
        limit: 3,
        isLoaded: true,
        isLoading: false,
        error: null
    },
    
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(fetchUsers.fulfilled, (state, action) =>{
            state.isLoaded= action.payload.length ? true : false;
            state.isLoading = false;    
            state.error = null;      
            state.items = state.items.concat(action.payload);
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;      
            state.error = action.payload;
        })
        .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })  
        .addCase(updateUser.fulfilled, (state, action) =>{
            state.isLoaded= action.payload.length ? true : false;
            state.isLoading = false;    
            state.error = null;      
            const updatedUser = action.payload;
            const index = state.items.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    state.items[index] = updatedUser;
                }
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;      
            state.error = action.payload;
        });  
    },
});


export const { incrementPage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
