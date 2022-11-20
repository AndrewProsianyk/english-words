import { createReducer } from "@reduxjs/toolkit";
import { setCurrentUser, removeUser, addTheme } from './user-actions'

const initialState = {
    name: null,
    email: null,
    token: null,
    isLoggedIn: false
}

export const userReducer = createReducer(
    initialState, {
    [setCurrentUser]: (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.isLoggedIn = true;
    },
    [removeUser]: (state) => {
        state.name = null;
        state.email = null;
        state.isLoggedIn = false;
    },
    [addTheme]: (state, { payload }) => [...state, payload]
},
);
