import { createReducer, createAction } from '@reduxjs/toolkit'

const filterChange = createAction('FILTER_CHANGE')

export const filterReducer = createReducer('', {
    [filterChange]: (_, action) => action.payload
})

