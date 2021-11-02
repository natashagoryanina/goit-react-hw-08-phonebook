import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderList = ({header}) => {
    return (
        <nav>
            <ul className='header-list'>
                {header.map((item) => (
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
        </nav>
    );
};

export default HeaderList;