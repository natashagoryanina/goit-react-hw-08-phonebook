import { lazy } from "react";

const loginRoutes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: lazy(() => import("../pages/home-page/HomePage" 
        /* webpackChunkName: 'HomePage' */))
    },
    {
        name: 'Contacts',
        path: '/contacts',
        exact: false,
        component: lazy(() => import("../pages/contacts-page/ContactsPage" 
        /* webpackChunkName: 'ContactsPage' */))
    }
];

export default loginRoutes;