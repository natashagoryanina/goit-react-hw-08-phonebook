import { createAction } from "@reduxjs/toolkit";

const signUpRequest = createAction('auth/signUpRequest');
const signUpSuccess = createAction('auth/signUpSuccess');
const signUpError = createAction('auth/signUpError');

const signInRequest = createAction('auth/signInRequest');
const signInSuccess = createAction('auth/signInSuccess');
const signInError = createAction('auth/signInError');

const logOutRequest = createAction('auth/logOutRequest');
const logOutSuccess = createAction('auth/logOutSuccess');
const logOutError = createAction('auth/logOutError');

const currentUserRequest = createAction('auth/currentUserRequest');
const currentUserSuccess = createAction('auth/currentUserSuccess');
const currentUserError = createAction('auth/currentUserError');

export {
    signUpRequest,
    signUpSuccess,
    signUpError,
    signInRequest,
    signInSuccess,
    signInError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError
};
