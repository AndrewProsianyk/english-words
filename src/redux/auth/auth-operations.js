import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        console.log(token)
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/auth/register', credentials)
        token.set(data.data.token);
        return data
    } catch (error) {
        console.log(error.message)
    }
})

const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/auth/login', credentials);
        token.set(data.data.token);
        return data;
    } catch (error) {
        console.log(error.message)
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

const operations = {
    login,
    register,
    logout,
    // loadUser,
};
export default operations;