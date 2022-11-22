import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://vocab-service.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:3001/api';
// http://localhost:3001/api
// https://vocab-service.onrender.com/api

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/auth/register', credentials)
        return data
    } catch (error) {
        console.log(error.message)
    }
})

const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/auth/login', credentials);
        console.log(data)
        token.set(data.data.token);
        return data;
    } catch (error) {
        alert(error.response.data.message)
    }
});

const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/auth/logout');
        token.unset()
    } catch (error) {
        console.log(error.message)
    }
});

const getCurrentUser = createAsyncThunk('auth/currentUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token

    if (persistedToken === null) {
        console.log('No token')
        return thunkAPI.rejectWithValue()
    }
    token.set(persistedToken)

    try {
        const { data } = await axios.get('/auth/currentUser')
        return data
    } catch (error) {
        console.log(error.message)
    }
});

const operations = {
    login,
    register,
    logout,
    getCurrentUser,
};
export default operations;