import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, loadingReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';
import { registerReducer, isLoggedInReducer } from './auth/authReducer';
import { errorReducer } from './errorsReducer';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token', 'user', 'contacts'],
};

const contactsR = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
});

const signUpReducer = combineReducers({
    user: registerReducer,
    token: null,
    isLoggedIn: isLoggedInReducer,
});

const rootReducer = combineReducers({
    contacts: persistReducer(persistConfig, contactsR),
    auth: persistReducer(persistConfig, signUpReducer),
    loading: loadingReducer,
    error: errorReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;