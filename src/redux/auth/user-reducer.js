import { createReducer, createSlice } from "@reduxjs/toolkit";
import { setCurrentUser, removeUser } from './user-actions'

const initialState = {
    name: null,
    email: null,
    token: null,
}

export const userReducer = createReducer(
    initialState, {
    [setCurrentUser]: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
    },
    [removeUser]: (state) => {
        state.name = null;
        state.email = null;
        state.token = null;
    },
},
);
