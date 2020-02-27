import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = props => {
	return (
		<div className='App-header'>
			<header className='Img-header'>
				<img alt='logo' src='https://i.imgur.com/jcvsFKh.png' />
			</header>
			<nav className='App-nav'>
				<Link className='App-links' to='/'>
					Home
				</Link>
				<Link
					className='App-links'
					to='/machines'
					onClick={props.onHandleGetMachines}
				>
					Machines
				</Link>
			</nav>
		</div>
	);
};

Header.propTypes = {
	onHandleGetMachines: PropTypes.func
};

export default Header;
