import React, { useReducer } from 'react'
import axios from 'axios'
import ContactContext from './ContactContext'
import contactReducer from './contactReducer'
import { ADD_CONTACT,
  DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT,FILTER_CONTACTS, CLEAR_FILTER, 
  UPDATE_CONTACT, CONTACT_ERROR, GET_CONTACTS, CLEAR_CONTACTS
 } from '../types'

const ContactState = props=>{
	const initialState={
		contacts:[],
		current:null,
		filtered:null,
		error:null,
		loading:true
	}
	const [state, dispatch] = useReducer(contactReducer, initialState)
	const DOMAIN = "http://localhost:8080"
	const getContacts = ()=>{
		axios.get(`${DOMAIN}/api/contact`)
		.then(res=> dispatch({type:GET_CONTACTS, payload:res.data}))
		.catch(err=> dispatch({type:CONTACT_ERROR, payload:err.response && err.response.msg}))
	}
	const addContact = contact=>{
		const config = {
			headers:{
				'Content-Type':'application/json'
			}
		}

		axios.post(`${DOMAIN}/api/contact`, contact, config)
		.then(res=> dispatch({type:ADD_CONTACT, payload:res.data}))
		.catch(err=> dispatch({type:CONTACT_ERROR, payload:err.response && err.response.msg}))
	}

	const updateContact = contact=>{
		const config = {
			headers:{
				'Content-Type':'application/json'
			}
		}

		axios.put(`${DOMAIN}/api/contact/${contact._id}`, contact, config)
		.then(res=> dispatch({type:UPDATE_CONTACT, payload:res.data}))
		.catch(err=> dispatch({type:CONTACT_ERROR, payload:err.response && err.response.msg}))
		
	}
	
	const deleteContact = id =>{
		axios.delete(`${DOMAIN}/api/contact/${id}`)
		.then(res=> dispatch({type:DELETE_CONTACT, payload:id}))
		.catch(err=> dispatch({type:CONTACT_ERROR, payload:err.response && err.response.msg}))
		
	}

	const clearContacts = ()=> dispatch({type:CLEAR_CONTACTS})

	const setCurrent = contact =>{
		dispatch({type:SET_CURRENT, payload:contact})
	}
	const clearCurrent = () =>{
		dispatch({type:CLEAR_CURRENT})
	}

	const filterContacts = text =>{
		dispatch({type:FILTER_CONTACTS, payload:text})
	}

	const clearFilter = ()=>{
		dispatch({type:CLEAR_FILTER})
	}
	
	return (
		<ContactContext.Provider value={{
					contacts:state.contacts,
					current:state.current,
					filtered:state.filtered,
					error:state.error,
					loading:state.loading,
					addContact, 
					deleteContact,
					setCurrent, 
					clearCurrent,
					updateContact,
					filterContacts,
					clearFilter,
					getContacts,
					clearContacts
				}}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState