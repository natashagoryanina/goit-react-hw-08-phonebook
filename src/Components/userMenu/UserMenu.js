import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutOperation } from '../../redux/auth/auth-operations';
import { userEmailSelector } from '../../redux/selectors';

const UserMenu = () => {
    const dispatch = useDispatch();

    const userEmail = useSelector(userEmailSelector);

    return (
        <div>
            <p>Welcome, {userEmail}</p>
            <button type='button' onClick={() => dispatch(logOutOperation())}>
                Log Out
            </button>
        </div>
    );
};

export default UserMenu;