import React from 'react';
import {Link} from 'react-router-dom';

import '../sidebar-item/sidebar-item.styles.scss'; 

interface Props{
    itemName: string,
    url: string
};
const SidebarItem: React.FC<Props> = ({itemName, url}) => (
    <Link to={url} style={{textDecoration:'none'}}>
    <div className='item'>   
        <p>{itemName}</p>   
    </div>
    </Link>
)

export default SidebarItem;