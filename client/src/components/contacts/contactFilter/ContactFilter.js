import React, { useContext, useRef, useEffect } from 'react' 
import ContactContext from '../../../context/contact/ContactContext'

const ContactFilter = props =>{
	const { filterContacts, clearFilter, filtered } = useContext(ContactContext)
	const text = useRef('')
	useEffect(()=>{
		if(!filtered)  text.current.value = '' 
	})
	const onChange = e=>{
		text.current.value ? filterContacts(e.target.value) : clearFilter()
	}

	return(
		<form>
			<input type="text" onChange={onChange} ref={text} placeholder="Search contact..." />
		</form>
	)
}

export default ContactFilter