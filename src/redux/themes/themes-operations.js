import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';



const addTheme = createAsyncThunk('themes/add', async credentials => {
    try {

        const newTheme = await axios.post('/themes', credentials)
        toast.success(`Theme ${credentials.name} successfully added!`)
        return newTheme
    } catch (error) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message)
    }
})

const getAllThemes = createAsyncThunk('themes/getAll', async () => {
    try {
        const allThemes = await axios.get('/themes')
        return allThemes.data.data.themes
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
})

const operations = {
    addTheme,
    getAllThemes,
}

export default operations
