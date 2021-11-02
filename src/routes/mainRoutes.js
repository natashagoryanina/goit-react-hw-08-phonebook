import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";
import RegisterPage from "../pages/register-page/RegisterPage";

const mainRoutes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        name: 'Registration',
        path: '/register',
        component: RegisterPage,
        exact: false
    },
    {
        name: 'Login',
        path: '/login',
        component: LoginPage,
        exact: false
    },
];

export default mainRoutes;