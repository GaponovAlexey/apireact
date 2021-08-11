import {  Breadcrumbs, Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';




const Navbar = (props) => {

	return (
		<nav className={ s.nav }>
			<div className={ s.item }>
				<NavLink to="/profile" active ClassName={ s.activelink }>
					<Button color="link" >one</Button>
				</NavLink>
			</div>

			<div className={ `${s.item}` }>
				<NavLink to="/dialogs" active ClassName='activelink'>
					<Button color="link" >two</Button>
				</NavLink>
			</div>
			<div className={ s.item }>
				<NavLink to='/users' active ClassName={ s.activelink } >
					<Button color="link" >three</Button>
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