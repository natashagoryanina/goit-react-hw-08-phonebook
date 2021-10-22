import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <span className="formText">Name:</span>
            <label className="formLabel">
                <input
                    className="formInput"
                    type="text"
                    name="name"
                    // onChange={onFormChange}
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
                    // onChange={onFormChange}
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
                    // onChange={onFormChange}
                    value={password}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and 
                            lowercase letter, and at least 8 or more characters"
                    required
                />
            </label>
            <button className="registrateBtn" type="submit">
                Sign up
            </button>
        </div>
    );
};

export default RegisterForm;