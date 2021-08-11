import {  Breadcrumbs, Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<nav className={ s.nav }>
			<div className={ s.item }>
				<NavLink to="/pageone"  className={ s.activelink }>
					<Button  >one</Button>
				</NavLink>
			</div>

			<div className={ `${s.item}` }>
				<NavLink to="/pagetwo"  className='activelink'>
					<Button >two</Button>
				</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink to='/pagethree'  className={ s.activelink } >
					<Button  >three</Button>
				</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink to='/counter'  className={ s.activelink } >
					<Button  >counter</Button>
				</NavLink>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<div>
				<Breadcrumbs aria-label="breadcrumb">
					<div className={ `${s.loginBlock} ${s.item}` }>
						{ props.isAuth ? props.login
							: <NavLink to={ '/login' }>login please</NavLink> }
					</div>
				</Breadcrumbs>
			</div>
		</nav>
	)
}
export default Navbar;