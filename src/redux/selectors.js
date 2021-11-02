import { createSelector } from 'reselect';

export const filterValueSelector = (state) => state.contacts.filter;
export const contactSelector = (state) => state.contacts.items;
export const loadingSelector = (state) => state.contacts.loading;

export const filteredContactsSelector = createSelector(
    [contactSelector, filterValueSelector],
    (contacts, filter) => contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())),
);

export const userSelector = (state) => state.auth.user;
export const userEmailSelector = (state) => state.auth.user.user.email;
export const isLoggedInSelector = (state) => state.auth.isLoggedIn;
export const tokenSelector = (state) => state.auth.user.token;
