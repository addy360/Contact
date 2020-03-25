import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../../context/auth/authContext'
import AlertContext from '../../../context/alert/alertContext'


const Login = props =>{
	const { loginUser, error, clearErrors, isAuthenticated } = useContext(AuthContext)
	const { setAlert } = useContext(AlertContext)
	useEffect(()=>{
		if (isAuthenticated) return props.history.push("/")
		if (error) setAlert(error,'danger')
		clearErrors()
	// eslint-disable-next-line
	},[error,isAuthenticated])
	const [formData, setFormData] = useState({
		email:'',
		password:'',
	})
	const { email, password,  } = formData
	const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value })

	const onSubmit = e =>{
		e.preventDefault()
		if ( email === ''|| password === '')	return setAlert("Please fill out all fields", 'danger')
		loginUser({email, password})
		setFormData({
			email:'',
			password:'',
		})
	}
	
	return (
		<div className="form-container" >
		<div className="card bg-primary">
			<form onSubmit={ onSubmit }  >
				<h1 className="text-white lead ">Login</h1>
				<input type="email" placeholder="Your email ie, 'SBashir@email.com'" name="email" onChange={onChange} value={ email } />
				<input type="password" minLength="6" placeholder="Your password " name="password" onChange={onChange} value={ password } />
				<input type="submit"  className="btn btn-success btn-block" />
			</form>
		</div>
		</div>
	)
}

export default Login