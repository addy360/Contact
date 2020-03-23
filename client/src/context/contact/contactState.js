import React, { useReducer } from 'react'
import ContactContext from './ContactContext'
import contactReducer from './contactReducer'
import { v4 } from 'uuid'
import { ADD_CONTACT,
  DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT,FILTER_CONTACTS, CLEAR_FILTER, 
  UPDATE_CONTACT,
 } from '../types'

const ContactState = props=>{
	const initialState={
		contacts:[
			{
				id:v4(),
				name:'name one',
				email:'emailOne@email.com',
				phone:"111 111 1111",
				type:"professional"
			},
			{
				id:v4(),
				name:'name two',
				email:'emailtwo@email.com',
				phone:"222 222 2222",
				type:"personal"
			},
			{
				id:v4(),
				name:'name three',
				email:'emailthree@email.com',
				phone:"333 333 3333",
				type:"professional"
			},
			
		],
		current:null,
		filtered:null,
	}
	const [state, dispatch] = useReducer(contactReducer, initialState)

	const addContact = contact=>{
		contact.id = v4()
		dispatch({type:ADD_CONTACT, payload:contact})
	}

	const updateContact = contact=>{
		dispatch({type:UPDATE_CONTACT, payload:contact})
	}
	
	const deleteContact = id =>{
		dispatch({type:DELETE_CONTACT, payload:id})
	}

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
					addContact, 
					deleteContact,
					setCurrent, 
					clearCurrent,
					updateContact,
					filterContacts,
					clearFilter
				}}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState