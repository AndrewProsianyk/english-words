import { createSlice } from '@reduxjs/toolkit'
import authOperations from './auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user = action.payload.loggedUser;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },
        [authOperations.login.fulfilled](state, action) {
            state.user = action.payload.data.loggedUser;
            state.token = action.payload.data.token;
            state.isLoggedIn = true
        },
        [authOperations.logout.fulfilled](state, action) {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false
        },
    }
})

export default authSlice.reducer