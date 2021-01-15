import { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sidebar-item/sidebar-item.styles.scss";
import { IconName } from "@fortawesome/fontawesome-svg-core";

interface props {
  menuIsOpen: boolean;
  iconName: IconName;
  itemTitle: string;
  isSelected: boolean;
}
const SidebarItem: FC<props> = ({
  menuIsOpen,
  iconName,
  itemTitle,
  isSelected,
}) => {
  return (
    <div className={`${menuIsOpen ? "open" : "closed"}`}>
      <div
        className={`${isSelected ? "selected" : "item"} ${
          menuIsOpen ? "open" : "closed"
        }`}
      >
        <span className="bar" />
        <div className="icon-title-container">
          <div className="icon-box">
            <FontAwesomeIcon
              className="faIcon"
              icon={["fas", iconName]}
              size="lg"
            />
          </div>
          <p>{itemTitle}</p>
        </div>
      </div>
      {/* <Link
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
					<div className='icon-title-container'>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'tasks']}
								size='lg'
							/>
						</div>
						<p>Ckecklist</p>
					</div>
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
					<div className='icon-title-container'>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'balance-scale']}
								size='lg'
							/>
						</div>
						<p>Originals</p>
					</div>
				</div>
			</Link>
			<h2 className='second-header'>Estate Administration</h2>
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
					<div className='icon-title-container'>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'receipt']}
								size='lg'
							/>
						</div>
						<p>Receipts</p>
					</div>
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
					<div className='icon-title-container'>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'hand-holding-usd']}
								size='lg'
							/>
						</div>
						<p>Disbursment</p>
					</div>
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
					<div className='icon-title-container'>
						<div className='icon-box'>
							<FontAwesomeIcon
								className='faIcon'
								icon={['fas', 'file-alt']}
								size='lg'
							/>
						</div>
						<p>Documents</p>
					</div>
				</div>
			</Link> */}
    </div>
  );
};

export default SidebarItem;
