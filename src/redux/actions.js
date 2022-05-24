import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addWord = createAction('ADD_WORD', (e, u) => ({
    payload: {
        eng: e,
        ua: u,
        id: uuidv4()
    }
}));

export const removeWord = createAction('REMOVE_WORD')

export const filterChange = createAction('FILTER_CHANGE')

// THEMES

export const addTheme = createAction('ADD_THEME', (name) => ({
    payload: {
        name,
        path: `/flashcards/${name}`,
        words: [],
        id: uuidv4()
    }
}));