import React, {Suspense, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router';
import GlobalStyles from '../styles/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { isLoggedInSelector, loadingSelector } from '../redux/selectors';
import Header from './header/Header';
import HomePage from '../pages/home-page/HomePage';
import ContactsPage from '../pages/contacts-page/ContactsPage';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';

const App = () => {
    const loading = useSelector(loadingSelector);
    const isLoggedIn = useSelector(isLoggedInSelector);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
            <GlobalStyles></GlobalStyles>
            <Header/>
            {loading && <h3>Loading...</h3>}
            <Suspense fallback = {<h3>Loading...</h3>}>
            <Switch>
                <Route path='/' exact>
                    <HomePage/>
                </Route>

                {!isLoggedIn && 
                    <>
                        <Route path='/login'>
                            <LoginPage/>
                        </Route>
                        <Route path='/register'>
                            <RegisterPage/>
                        </Route>
                        <Redirect to='/login'>
                        </Redirect>
                    </>
                }

                {isLoggedIn && 
                    <Route path='/contacts'>
                        <ContactsPage/>
                    </Route> 
                }

                <Route>
                    <HomePage/>
                </Route>
            </Switch>
            </Suspense>
        </main>
    );
};

export default App;
