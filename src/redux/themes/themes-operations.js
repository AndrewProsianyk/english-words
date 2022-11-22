import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


const addTheme = createAsyncThunk('themes/add', async credentials => {
    try {
        const newTheme = await axios.post('/themes', credentials)
        // localStorage.setItem('addedTheme', newTheme.data.data.result._id)
        return newTheme
    } catch (error) {
        console.log(error)
    }
})

const getAllThemes = createAsyncThunk('themes/getAll', async () => {
    try {
        const allThemes = await axios.get('/themes')
        // console.log(allThemes.data.data.themes)
        return allThemes.data.data.themes
    } catch (error) {
        console.log(error)
    }
})

const operations = {
    addTheme,
    getAllThemes,
}

export default operations
