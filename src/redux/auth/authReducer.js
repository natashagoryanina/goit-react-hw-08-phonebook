import { createReducer } from '@reduxjs/toolkit';
import { 
    signUpError, 
    signUpRequest, 
    signUpSuccess,
    signInRequest,
    signInSuccess,
    signInError,
    logOutRequest,
    logOutSuccess,
    logOutError } from './authActions';

const registerReducer = createReducer({},{
    [signUpSuccess]: (_, {payload}) => {
        return payload;
    },
    [signInSuccess]: (_, {payload}) => {
        return payload;
    },
    [logOutSuccess]: (state, {payload}) => {
        state.user = {name: '', email:''};
        state.token = null;
    }
});

const loadingReducer = createReducer(false, {
    [signUpRequest]: () => true,
    [signUpSuccess]: () => false,
    [signUpError]: () => false,
    [signInRequest]: () => true,
    [signInSuccess]: () => false,
    [signInError]: () => false,
    [logOutRequest]: () => true,
    [logOutSuccess]: () => false,
    [logOutError]: () => false,
});

const isLoggedInReducer = createReducer(false, {
    [signUpSuccess]: () => true,
    [signInSuccess]: () => true,
    [logOutSuccess]: () => false,
});

export { registerReducer, loadingReducer, isLoggedInReducer}