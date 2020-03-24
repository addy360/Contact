import React, { useState } from 'react'

const Login = props =>{
	const [formData, setFormData] = useState({
		email:'',
		password:'',
	})
	const { email, password,  } = formData
	const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value })

	const onSubmit = e =>{
		e.preventDefault()
		// submittind data
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
				<input type="password" placeholder="Your password " name="password" onChange={onChange} value={ password } />
				<input type="submit"  className="btn btn-success btn-block" />
			</form>
		</div>
		</div>
	)
}

export default Login