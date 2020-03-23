import React , { useContext }from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from './contactItem/ContactItem'
import ContactContext from '../../context/contact/ContactContext'

const Contacts = props=>{
	const { contacts, filtered } = useContext(ContactContext)

	if(contacts.length === 0) return <h4 className="lead text-primary">You have currently no contacts.</h4>

	let cont = contacts
	if (filtered) cont = filtered
	return(
		<TransitionGroup>
	  		{cont.map(contact =>(<CSSTransition timeout={500} classNames="item"  key={contact.id} >
	  		 						<ContactItem contact={contact} /> 
	  		 					</CSSTransition>))}
		</TransitionGroup>
	)
}

export default Contacts