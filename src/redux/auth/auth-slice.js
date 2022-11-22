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
            state.user.name = action.payload.newUser.name;
            state.user.email = action.payload.newUser.email;
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
        [authOperations.getCurrentUser.fulfilled](state, action) {
            state.user.name = action.payload.data.user.name;
            state.user.email = action.payload.data.user.email;
            state.isLoggedIn = true
        },
    }
})

export default authSlice.reducer