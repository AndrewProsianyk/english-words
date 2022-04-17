import { configureStore, createReducer, combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { addWord, removeWord, filterChange } from './actions'

const persistConfig = {
    key: 'words',
    storage,
    blacklist: ['filter']
}

const wordReducer = createReducer([], {
    [addWord]: (state, action) => [...state, action.payload],
    [removeWord]: (state, action) => state.filter(word => word.id !== action.payload)
})

const filterReducer = createReducer('', {
    [filterChange]: (_, action) => action.payload
})

const rootReducer = combineReducers({
    words: wordReducer,
    filter: filterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

const persistor = persistStore(store)

export default { store, persistor };