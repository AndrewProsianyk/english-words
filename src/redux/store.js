import { configureStore, createReducer, combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import authSlice from './auth/auth-slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

// const persistConfig = {
//     key: 'words',
//     storage,
//     blacklist: ['filter']
// }

// const themeReducer = createReducer([], {
//     [addTheme]: (state, action) => [...state, action.payload],
// })
// const wordReducer = createReducer([], {
//     [addWord]: (state, action) => [...state, action.payload],
//     [removeWord]: (state, action) => state.filter(word => word.id !== action.payload)
// })

// const filterReducer = createReducer('', {
//     [filterChange]: (_, action) => action.payload
// })