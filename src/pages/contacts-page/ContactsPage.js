import React from 'react';
import { useSelector } from 'react-redux';
import ContactsForm from '../../Components/contactsForm/ContactsForm';
import ContactsList from '../../Components/contactsList/ContactsList';
import Filter from '../../Components/filter/Filter';
import { loadingSelector } from '../../redux/selectors';

const ContactsPage = () => {
    const loading = useSelector(loadingSelector);
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactsForm/>
            <Filter/>
            <h2>Contacts</h2>
            {loading && <h3>Loading...</h3>}
            <ContactsList/>
        </div>
    );
};

export default ContactsPage;