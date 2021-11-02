import { lazy } from "react";

const mainRoutes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: lazy(() => import("../pages/home-page/HomePage" 
        /* webpackChunkName: 'HomePage' */))
    },
    {
        name: 'Registration',
        path: '/register',
        exact: false,
        component: lazy(() => import("../pages/register-page/RegisterPage"
        /* webpackChunkName: 'RegisterPage' */))
    },
    {
        name: 'Login',
        path: '/login',
        exact: false,
        component: lazy(() => import("../pages/login-page/LoginPage"
        /* webpackChunkName: 'LoginPage' */))
    },
];

export default mainRoutes;