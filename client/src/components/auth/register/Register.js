import React, { useState, useContext, useEffect } from 'react'

import AlertContext from '../../../context/alert/alertContext'
import AuthContext from '../../../context/auth/authContext'

const Register = props =>{
	const { setAlert } = useContext(AlertContext)
	const { registerUser, error, clearErrors, isAuthenticated } = useContext(AuthContext)
	useEffect(()=>{
		if (isAuthenticated) return props.history.push("/")
		if (error) setAlert(error, 'danger')
		clearErrors()
	// eslint-disable-next-line
	},[error, isAuthenticated])
	const [formData, setFormData] = useState({
		name:'',
		email:'',
		password:'',
		password2:'',
	})
	const { name, email, password, password2 } = formData
	const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value })

	const onSubmit = e =>{
		e.preventDefault()
		if (name === '' || email === ''|| password === ''|| password2==='')	return setAlert("Please fill out all fields", 'danger')
		if (password2 !== password) return setAlert("Passwords do NOT match", 'danger')
		registerUser({
			name, email, password
  		})
		setFormData({
			name:'',
			email:'',
			password:'',
			password2:'',
		})
	}
	
	return (
		<div className="form-container" >
		<div className="card bg-primary">
			<form onSubmit={ onSubmit }  >
				<h1 className="text-white lead ">Register</h1>
				<input type="text" placeholder="Your name ie, 'Sued Bashir'" name="name" onChange={onChange} value={ name } />
				<input type="email" placeholder="Your email ie, 'SBashir@email.com'" name="email" onChange={onChange} value={ email } />
				<input type="password" minLength="6" placeholder="Your password " name="password" onChange={onChange} value={ password } />
				<input type="password" placeholder="Confirm password" name="password2" onChange={onChange} value={ password2 } />
				<input type="submit"  className="btn btn-success btn-block" />
			</form>
		</div>
		</div>
	)
}

export default Register