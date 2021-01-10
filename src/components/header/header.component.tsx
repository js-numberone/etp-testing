import React from 'react';

import UserBox from './user-box/user-box.component'
import ValuesBox from './values-box/values-box.component';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <ValuesBox/>
        <UserBox/>
    </div>
)

export default Header;