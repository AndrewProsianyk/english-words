import { v4 as uuidv4 } from 'uuid';
// const id = uuidv4()

export const addWord = (e, u) => ({
    type: 'ADD_WORD',
    payload: {
        eng: e,
        ua: u,
        id: uuidv4()
    }
})

export const removeWord = id => ({
    type: 'REMOVE_WORD',
    payload: id
})