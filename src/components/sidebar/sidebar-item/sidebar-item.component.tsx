import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import '../sidebar-item/sidebar-item.styles.scss'; 

import {useState} from 'react';

const SidebarItem = () =>{
    const [activeMenu, setActiveMenu] = useState("")
    return(
        <div>
        <h2>Dashboard</h2>
        <Link to='/' style={{textDecoration:'none'}} onClick={() => {setActiveMenu("home")}}>
            <div className={`${activeMenu == 'home' ? 'selected' : 'item'}`}>    
                <p><FontAwesomeIcon className='faIcon' icon={['fas', 'home']} size="lg" />Summary</p>   
            </div>
        </Link>
        <Link to='/checklist' style={{textDecoration:'none'}} onClick={() => {setActiveMenu("check")}}>
            <div className={`${activeMenu == 'check' ? 'selected' : 'item'}`}>    
                <p><FontAwesomeIcon className='faIcon' icon={['fas', 'tasks']} size="lg" />Ckecklist</p>   
            </div>    
        </Link>
        <Link to='/originals' style={{textDecoration:'none'}} onClick={() => {setActiveMenu("original")}}>
            <div className={`${activeMenu == 'original' ? 'selected' : 'item'}`}>    
                <p><FontAwesomeIcon className='faIcon' icon={['fas', 'balance-scale']} size="lg" />Originals</p>   
            </div>
        </Link>
        <h2>Estate Administration</h2>
        <Link to='/checklist' style={{textDecoration:'none'}} onClick={() => {setActiveMenu("receipt")}}>
            <div className={`${activeMenu == 'receipt' ? 'selected' : 'item'}`}>    
                <p><FontAwesomeIcon className='faIcon' icon={['fas', 'receipt']} size="lg" />Receipts</p>   
            </div>    
        </Link>
        <Link to='/checklist' style={{textDecoration:'none'}} onClick={() => {setActiveMenu("disbursment")}}>
            <div className={`${activeMenu == 'disbursment' ? 'selected' : 'item'}`}>    
                <p><FontAwesomeIcon className='faIcon' icon={['fas', 'hand-holding-usd']} size="lg" />Disbursment</p>   
            </div>    
        </Link>
        <Link to='/checklist' style={{textDecoration:'none'}} onClick={() => {setActiveMenu("gen")}}>
            <div className={`${activeMenu == 'gen' ? 'selected' : 'item'}`}>    
                <p><FontAwesomeIcon className='faIcon' icon={['fas', 'file-alt']} size="lg" />Generate Documents</p>   
            </div>    
        </Link>
    </div>
    )
}

export default SidebarItem;