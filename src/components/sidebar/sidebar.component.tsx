import { useState, useEffect } from 'react';
import SidebarItem from './sidebar-item/sidebar-item.component';

import './sidebar.styles.scss';
import useViewport from '../../hooks/use-viewport';

const SideBar = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(true);
	const { width } = useViewport();
	const breakpoint: number = 900;

	useEffect(() => {
		if (width <= breakpoint) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	}, [width]);

	return (
		<nav className={`sidebar-container ${menuOpen ? 'open' : 'closed'}`}>
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
