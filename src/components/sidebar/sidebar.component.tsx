import SidebarItem from './sidebar-item/sidebar-item.component'
import './sidebar.styles.scss';
import logo from '../../assets/salmonLogo.png'
import { render } from '@testing-library/react';



const SideBar = () => {
    return(
        <div className='sidebar-container'>
            <img className='sidebar-logo' src={logo} alt="Logo"/>
            <div className='sidebar-menu-items'>
            <SidebarItem/>
            </div>
        </div>
    )
}


export default SideBar