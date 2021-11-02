import { createReducer } from '@reduxjs/toolkit';
import { 
    signInError,
    signInRequest, 
    signUpError,
    signUpRequest,
    logOutRequest,
    logOutError,
    currentUserRequest,
    currentUserError } from './auth/authActions';
import { 
    getContactRequest,
    getContactError,
    addContactRequest, 
    addContactError, 
    deleteContactRequest,
    deleteContactError } from "./contacts/contactsActions";

const errorReducer = createReducer(null, {
    [getContactError]: (_, action) => action.payload,
    [addContactError]: (_, action) => action.payload,
    [deleteContactError]: (_, action) => action.payload,
    [signInError]: (_, action) => action.payload,
    [signUpError]: (_, action) => action.payload,
    [logOutError]: (_, action) => action.payload,
    [currentUserError]: (_, action) => action.payload,
    [getContactRequest]: () => null,
    [deleteContactRequest]: () => null,
    [addContactRequest]: () => null,
    [signInRequest]: () => null,
    [signUpRequest]: () => null,
    [logOutRequest]: () => null,
    [currentUserRequest]: () => null,
});

export { errorReducer };