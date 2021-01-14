import { useState, useEffect } from 'react';
import SidebarItem from './sidebar-item/sidebar-item.component';

import './sidebar.styles.scss';
import useViewport from '../../hooks/use-viewport';

const SideBar = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(true);
	const [screenSize, setScreenSize] = useState<string>('');
	const { width } = useViewport();
	//const breakpoint: number = 1700;

	useEffect(() => {
		// if (width > 1200) {
		// 	setScreenSize('lg');
		// } else if (width < 1650 && width > 1380) {
		// 	setScreenSize('md');
		// } else
		if (width <= 1100) {
			setScreenSize('sm');
		} else {
			setScreenSize('');
		}
	}, [width]);

	return (
		<nav
			className={`sidebar-container ${
				menuOpen ? 'open' : 'closed'
			} ${screenSize}`}
		>
			<button
				className='toggle-button'
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<span className={`chevron ${menuOpen ? 'left' : 'right'}`} />
			</button>
			<div className='sidebar-menu-items'>
				<SidebarItem menuIsOpen={menuOpen} />
			</div>
		</nav>
	);
};

export default SideBar;
