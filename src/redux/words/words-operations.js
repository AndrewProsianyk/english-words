import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const addWord = createAsyncThunk('words/add', async credentials => {
    try {

        const newWord = await axios.post('/words', credentials)
        toast.success('Word(s) successfully added!')
        return newWord
    } catch (error) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message)
    }
})

const getAllwords = createAsyncThunk('words/getAll', async () => {
    try {
        const allWords = await axios.get('/words')
        return allWords.data.data.words
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
})

const getThemeWords = createAsyncThunk('words/getThemeWords', async themeId => {
    try {
        const allWords = await axios.get(`/words/${themeId}`)
        return allWords.data.data.words
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
})

const operations = {
    addWord,
    getAllwords,
    getThemeWords
}

export default operations