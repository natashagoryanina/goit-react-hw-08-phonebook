import ContactsPage from "../pages/contacts-page/ContactsPage";
import HomePage from "../pages/home-page/HomePage";

const loginRoutes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        name: 'Contacts',
        path: '/contacts',
        component: ContactsPage,
        exact: false
    }
];

export default loginRoutes;