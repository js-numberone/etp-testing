import React from 'react';

import SidebarItem from './sidebar-item/sidebar-item.component';

import './sidebar.styles.scss';
import logo from '../../assets/salmonLogo.png'

const SideBar = () => (
    <div className='sidebar-container'>
        <img className='sidebar-logo' src={logo} alt="Logo"/>
        <div className='sidebar-menu-items'>
        <h2>Dashboard</h2>
        <SidebarItem itemName="Summary" url='/summary'/>
        <SidebarItem itemName="Checklist" url='/checklist'/>
        <SidebarItem itemName="Add Originals" url='/originals'/>
        <h2>Estate Administration</h2>
        <SidebarItem itemName="Receipts" url='/receipts'/>
        <SidebarItem itemName="Disbursments" url='/disbursments'/>
        <SidebarItem itemName="Generate Documents" url='/gen-docs'/>
        </div>
    </div>
)

export default SideBar