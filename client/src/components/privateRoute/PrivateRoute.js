import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthContext from '../../context/auth/authContext' 

const PrivateRoute = props=>{
	console.log(props)

	const { isAuthenticated, loading } = useContext(AuthContext)
	const {component:Component, ...rest} = props
	return (
		<Route {...rest } render={props =>!isAuthenticated && !loading ?(<Redirect to = "/login"/>):( <Component {...props} />)} />
	)
}

export default PrivateRoute