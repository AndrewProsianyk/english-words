import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import authSlice from './auth/auth-slice';
import themesSlice from './themes/themes-slice';
import wordsSlice from './words/words-slice';
import { filterReducer } from './filterReducer';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authSlice),
        themes: themesSlice,
        words: wordsSlice,
        filter: filterReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})

const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

