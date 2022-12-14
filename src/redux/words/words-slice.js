import { createSlice } from '@reduxjs/toolkit'
import wordsOperations from './words-operations'

const initialState = {
    words: [],
    isFetchingWords: false
}

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    extraReducers: {
        [wordsOperations.addWord.fulfilled](state, action) {
            state.words = [action.payload.data.data.result, ...state.words]
            state.isFetchingWords = false
        },
        [wordsOperations.getAllwords.fulfilled](state, action) {
            state.words = [...action.payload]
            state.isFetchingWords = false
        },
        [wordsOperations.getThemeWords.fulfilled](state, action) {
            state.words = [...action.payload]
            state.isFetchingWords = false
        },
        [wordsOperations.getThemeWords.pending](state, action) {
            state.words = []
            state.isFetchingWords = true
        }
    }
})

export default wordsSlice.reducer