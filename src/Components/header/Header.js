import React from 'react';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../redux/selectors';
import loginRoutes from '../../routes/loginRoutes';
import mainRoutes from '../../routes/mainRoutes';
import UserMenu from '../userMenu/UserMenu';
import HeaderList from './headerList/HeaderList';

const Header = () => {
    const isLogged = useSelector(isLoggedInSelector);
    return (
        <>
            {isLogged ? 
                <div>
                    <HeaderList header={loginRoutes}/>
                    <UserMenu/>
                </div> :
                <div>
                    <HeaderList header={mainRoutes}/>
                </div>
            }
        </>
    );
};

export default Header;