import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from '../../redux/selectors';
import { signUpOperation } from '../../redux/auth/auth-operations';


const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const users = useSelector(usersSelector);

    const dispatch = useDispatch();
    const signUpUser = (user) =>  dispatch(signUpOperation(user));

    const onFormChange = (e) => {
        const {name, value} = e.target;
        name === 'name' && setName(value);
        name === 'email' && setEmail(value);
        name === 'password' && setPassword(value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        signUpUser({name: name, email: email, password: password});
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={onFormSubmit}>
            <span className="formText">Name:</span>
            <label className="formLabel">
                <input
                    className="formInput"
                    type="text"
                    name="name"
                    onChange={onFormChange}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
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
            </label>
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
                Sign up
            </button>
        </form>
    );
};

export default RegisterForm;