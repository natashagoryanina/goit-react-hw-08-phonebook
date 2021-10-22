import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router';
import GlobalStyles from '../styles/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { loadingSelector } from '../redux/contacts-selectors';
import Header from './header/Header';
import HomePage from '../pages/home-page/HomePage';
import ContactsPage from '../pages/contacts-page/ContactsPage';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';

const App = () => {
    const loading = useSelector(loadingSelector);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
            <GlobalStyles></GlobalStyles>
            <Header/>
            {loading && <h3>Loading...</h3>}
            <Switch>
                <Route path='/' exact>
                    <HomePage/>
                </Route>

                <Route path='/register'>
                    <RegisterPage/>
                </Route>

                <Route path='/login'>
                    <LoginPage/>
                </Route>

                <Route path='/contacts'>
                    <ContactsPage/>
                </Route>

                <Route>
                    <HomePage/>
                </Route>
            </Switch>
        </main>
    );
};

export default App;
