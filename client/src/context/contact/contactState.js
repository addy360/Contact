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
				type:"Professional"
			},
			{
				id:v4(),
				name:'name two',
				email:'emailtwo@email.com',
				phone:"222 222 2222",
				type:"Personal"
			},
			{
				id:v4(),
				name:'name three',
				email:'emailthree@email.com',
				phone:"333 333 3333",
				type:"Professional"
			},
			
		]
	}
	const [state, dispatch] = useReducer(contactReducer, initialState)
	return (
		<ContactContext.Provider value={{
					contacts:state.contacts
				}}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactState