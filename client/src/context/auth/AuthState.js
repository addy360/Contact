import React, { useReducer } from 'react'
import authReducer from './authReducer'
import AuthContext from './authContext'
import {
	REGISTER_SUCCESS,REGISTER_FAIL,
	USER_LOADED,
	AUTHOR_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types'

const AuthState = props =>{
	const initialState = {
		user:null,
		token:localStorage.getItem('token'),
		isAuthenticated: null,
		loading:true,
		error:null
	}
	const [ state, dispatch] = useReducer(authReducer, initialState)
	return(
		<AuthContext.Provider value={{
					token:state.token,
					user:state.user,
					isAuthenticated:state.isAuthenticated,
					loading:state.loading,
					error:state.error
				}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState