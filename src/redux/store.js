
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const wordReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'ADD_WORD':
            return [...state, payload];

        case 'REMOVE_WORD':
            return state.filter(word => word.id !== payload);
        default:
            return state
    }
}

const rootReducer = combineReducers({
    words: wordReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

export default store;