import React from 'react';
import { NavLink } from 'react-router-dom';
import mainRoutes from '../../../routes/mainRoutes';

const HeaderList = () => {
    return (
        <ul className='header-list'>
            {mainRoutes.map((item) => (
                <li className='header-list_item' key={item.path}>
                    <NavLink 
                        to={item.path}
                        exact={item.exact}
                        className='header-list_link'
                        activeClassName='header-list_link-active' 
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default HeaderList;