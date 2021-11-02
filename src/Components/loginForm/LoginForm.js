import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInOperation } from '../../redux/auth/auth-operations';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const signInUser = (user) => dispatch(signInOperation(user));
    
    const onFormChange = (e) => {
        const {name, value} = e.target;
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        signInUser({email: email, password: password});
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={onFormSubmit}>
            <span className="formText">Email:</span>
            <label className="formLabel">
                <input
                    className="formInput"
                    type="email"
                    name="email"
                    onChange={onFormChange}
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Must be in the following order: characters@characters.domain"
                    required
                />
            <span className="formText">Password:</span>
            <label className="formLabel">
                <input
                    className="formInput"
                    type="password"
                    name="password"
                    onChange={onFormChange}
                    value={password}
                    //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    //title="Must contain at least one  number and one uppercase and 
                            //lowercase letter, and at least 8 or more characters"
                    required
                />
            </label>
            <button className="registrateBtn" type="submit">
                Sign in
            </button>
            </label>
        </form>
    );
};

export default LoginForm;