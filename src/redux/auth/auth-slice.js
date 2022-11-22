import { createSlice } from '@reduxjs/toolkit'
import authOperations from './auth-operations'

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled](state, action) {
            state.user.name = action.payload.newUser.name;
            state.user.email = action.payload.newUser.email;
        },
        [authOperations.login.pending](state, action) {
            state.isFetchingCurrentUser = true;
        },
        [authOperations.login.fulfilled](state, action) {
            state.user = action.payload.data.loggedUser;
            state.token = action.payload.data.token;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [authOperations.logout.fulfilled](state, action) {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false;
        },
        [authOperations.getCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [authOperations.getCurrentUser.fulfilled](state, action) {
            state.user.name = action.payload.data.user.name;
            state.user.email = action.payload.data.user.email;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false
        },
        [authOperations.getCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        },
    }
})

export default authSlice.reducer