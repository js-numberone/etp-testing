import { useState, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import '../sidebar-item/sidebar-item.styles.scss';

interface props {
	menuIsOpen: boolean;
}
const SidebarItem: FC<props> = ({ menuIsOpen }) => {
	const [activeMenu, setActiveMenu] = useState('home');
	return (
		<div className={`${menuIsOpen ? 'open' : 'closed'}`}>
			<h2>Dashboard</h2>
			<Link
				to='/'
				style={{ textDecoration: 'none' }}
				onClick={() => {
					setActiveMenu('home');
				}}
			>
				<div
					className={`${activeMenu === 'home' ? 'selected' : 'item'} ${
						menuIsOpen ? 'open' : 'closed'
					}`}
				>
					<span className='bar' />
					<p>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'home']}
								size='lg'
							/>
						</div>
						Summary
					</p>
				</div>
			</Link>
			<Link
				to='/checklist'
				style={{ textDecoration: 'none' }}
				onClick={() => {
					setActiveMenu('check');
				}}
			>
				<div
					className={`${activeMenu === 'check' ? 'selected' : 'item'} ${
						menuIsOpen ? 'open' : 'closed'
					}`}
				>
					<span className='bar' />
					<p>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'tasks']}
								size='lg'
							/>
						</div>
						Ckecklist
					</p>
				</div>
			</Link>
			<Link
				to='/originals'
				style={{ textDecoration: 'none' }}
				onClick={() => {
					setActiveMenu('original');
				}}
			>
				<div
					className={`${activeMenu === 'original' ? 'selected' : 'item'} ${
						menuIsOpen ? 'open' : 'closed'
					}`}
				>
					<span className='bar' />
					<p>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'balance-scale']}
								size='lg'
							/>
						</div>
						Originals
					</p>
				</div>
			</Link>
			<h2>Estate Administration</h2>
			<Link
				to='/checklist'
				style={{ textDecoration: 'none' }}
				onClick={() => {
					setActiveMenu('receipt');
				}}
			>
				<div
					className={`${activeMenu === 'receipt' ? 'selected' : 'item'} ${
						menuIsOpen ? 'open' : 'closed'
					}`}
				>
					<span className='bar' />
					<p>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'receipt']}
								size='lg'
							/>
						</div>
						Receipts
					</p>
				</div>
			</Link>
			<Link
				to='/checklist'
				style={{ textDecoration: 'none' }}
				onClick={() => {
					setActiveMenu('disbursment');
				}}
			>
				<div
					className={`${activeMenu === 'disbursment' ? 'selected' : 'item'} ${
						menuIsOpen ? 'open' : 'closed'
					}`}
				>
					<span className='bar' />
					<p>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'hand-holding-usd']}
								size='lg'
							/>
						</div>
						Disbursment
					</p>
				</div>
			</Link>
			<Link
				to='/checklist'
				style={{ textDecoration: 'none' }}
				onClick={() => {
					setActiveMenu('gen');
				}}
			>
				<div
					className={`${activeMenu === 'gen' ? 'selected' : 'item'} ${
						menuIsOpen ? 'open' : 'closed'
					}`}
				>
					<span className='bar' />
					<p>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'file-alt']}
								size='lg'
							/>
						</div>
						Documents
					</p>
				</div>
			</Link>
		</div>
	);
};

export default SidebarItem;
