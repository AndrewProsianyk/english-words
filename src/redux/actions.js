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

// export default { addWord, removeWord, filterChange }
// export const addWord = (e, u) => ({
//     type: 'ADD_WORD',
//     payload: {
//         eng: e,
//         ua: u,
//         id: uuidv4()
//     }
// })

// export const removeWord = id => ({
//     type: 'REMOVE_WORD',
//     payload: id
// })

// export const filterChange = value => ({
//     type: 'FILTER_CHANGE',
//     payload: value
// })