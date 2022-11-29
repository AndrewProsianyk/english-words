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
            state.themes = [action.payload.data.data.result, ...state.themes]
        },
        [themesOperations.getAllThemes.fulfilled](state, action) {

            state.themes = [...action.payload]
        }
    }
})

export default themesSlice.reducer