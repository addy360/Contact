import React, { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/ContactContext'

const Navbar = props=>{
	const { isAuthenticated, user, logoutUser } = useContext(AuthContext)
	const { clearContacts } = useContext(ContactContext)

	const onLogout = () =>{
		logoutUser()
		clearContacts()
	}

	const authlinks = (
		<Fragment>
			<li>Welcome { user && user.name }</li>
			<li>
				<a onClick={onLogout} href="#!" ><i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span></a>
			</li>
		</Fragment>
	)
	const guestlinks = (
		<Fragment>
			<li><Link to="/register" >Register</Link></li>
			<li><Link to="/login" >Login</Link></li>
		</Fragment>
	)
	
	return(
		<div className="navbar bg-primary">
			<h1>
				<i className={props.icon} /> { props.title }
			</h1>
			<ul>
				{ isAuthenticated ? authlinks : guestlinks }
			</ul>
		</div>
	)
}

export default Navbar