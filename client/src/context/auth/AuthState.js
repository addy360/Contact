import React, { useReducer } from 'react'
import { setAuthToken } from '../utils'
import axios from 'axios'

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

	const DOMAIN = 'http://localhost:8080'
	const [ state, dispatch] = useReducer(authReducer, initialState)

	const registerUser = formData =>{
		const consfig = {
			headers:{
				'Content-Type':'application/json'
			}
		}

		axios.post(`${DOMAIN}/api/users`, formData, consfig)
		.then(res=>{
			dispatch({type:REGISTER_SUCCESS, payload:res.data})
			loadUser()
		})
		.catch(err=>{
			dispatch({type:REGISTER_FAIL, payload:err.response.data.msg})
		})
	}
	const loginUser = formData =>{
		const consfig = {
			headers:{
				'Content-Type':'application/json'
			}
		}

		axios.post(`${DOMAIN}/api/auth`, formData, consfig)
		.then(res=>{
			dispatch({type:LOGIN_SUCCESS, payload:res.data})
			loadUser()
		})
		.catch(err=>{
			dispatch({type:LOGIN_FAIL, payload:err.response.data.msg})
		})
	}
	
	const loadUser = ()=>{
		if (localStorage.token) setAuthToken(localStorage.token)
		axios.get(`${DOMAIN}/api/auth`)
		.then(res=>{
			dispatch({type:USER_LOADED, payload:res.data})
		})
		.catch(err=>{
			dispatch({type:AUTHOR_ERROR})
		})
	}

	const logoutUser = () => dispatch({type:LOGOUT})
	

	const clearErrors = ()=> dispatch({type:CLEAR_ERRORS})

	return(
		<AuthContext.Provider value={{
					token:state.token,
					user:state.user,
					isAuthenticated:state.isAuthenticated,
					loading:state.loading,
					error:state.error,
					registerUser,
					clearErrors,
					loadUser,
					loginUser,
					logoutUser
				}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState