import { createSlice } from '@reduxjs/toolkit'
import themesOperations from './themes-operations'

const initialState = {
    themes: [],
    isFetchingThemes: false
}

const themesSlice = createSlice({
    name: 'themes',
    initialState,
    extraReducers: {
        [themesOperations.addTheme.fulfilled](state, action) {
            state.themes = [action.payload, ...state.themes]
        },
        [themesOperations.getAllThemes.fulfilled](state, action) {
            console.log(action.payload)
            state.themes = [...action.payload]
        }
    }
})

export default themesSlice.reducer