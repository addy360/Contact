import React , { useContext, useEffect }from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactItem from './contactItem/ContactItem'
import Spinner from '../Spinner/Spinner'
import ContactContext from '../../context/contact/ContactContext'

const Contacts = props=>{
	const { contacts, filtered, getContacts, loading } = useContext(ContactContext)

	useEffect(()=>{
		getContacts()
	// eslint-disable-next-line
	},[])

	if(contacts !== null && contacts.length === 0 && !loading) return <h4 className="lead text-primary">You have currently no contacts.</h4>

	let cont = contacts 
	if (filtered) cont = filtered
	const item = (
			<TransitionGroup>
		  		{cont.map(contact =>(<CSSTransition timeout={500} classNames="item"  key={contact._id} >
		  		 						<ContactItem contact={contact} /> 
		  		 					</CSSTransition>))}
			</TransitionGroup>
		)
	return(
		contacts.length > 0 && !loading ? item: <Spinner/>
		
	)
}

export default Contacts