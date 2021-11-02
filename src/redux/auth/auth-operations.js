import axios from 'axios';
import { 
    signUpError, 
    signUpRequest, 
    signUpSuccess,
    signInRequest,
    signInSuccess,
    signInError, 
    logOutRequest,
    logOutSuccess,
    logOutError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError } from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const signUpOperation = (user) => async (dispatch) => {
    dispatch(signUpRequest());

    try {
        const {data} = await axios.post('/users/signup', user);
        dispatch(signUpSuccess(data));
        token.set(data.token);
    } catch (error) {
        dispatch(signUpError(error));
    };
};

const signInOperation = (user) => async (dispatch) => {
    dispatch(signInRequest());

    try {
        const {data} = await axios.post('/users/login', user);
        dispatch(signInSuccess(data));
        token.set(data.token);
    } catch (error) {
        dispatch(signInError(error));
    };
};

const logOutOperation = () => async (dispatch) => {
    dispatch(logOutRequest());

    try {
        await axios.post('/users/logout');
        dispatch(logOutSuccess());
        token.unset();
    } catch (error) {
        dispatch(logOutError(error));
    };
};

const fetchCurrentUser = () => async (dispatch) => {
    dispatch(currentUserRequest());

    try {
        await axios.get('/users​/current');
        dispatch(currentUserSuccess());
    } catch (error) {
        dispatch(currentUserError(error));
    };
};

export { signUpOperation, signInOperation, logOutOperation, fetchCurrentUser}