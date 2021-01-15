import UserBox from './user-box/user-box.component';
import ValuesBox from './values-box/values-box.component';
import logo from '../../assets/salmonLogo.png';

import './header.styles.scss';
import useViewport from '../../hooks/use-viewport';

const Header = () => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<header className='header'>
			<img className='header-logo' src={logo} alt='Logo' />
			{width > breakpoint ? <ValuesBox /> : ''}
			<UserBox />
		</header>
	);
};

export default Header;
