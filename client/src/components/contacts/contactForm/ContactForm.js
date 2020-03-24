import React, {useState, useContext, useEffect , Fragment} from 'react'

import ContactContext from "../../../context/contact/ContactContext"
import AlertContext from "../../../context/alert/alertContext"

const ContactForm = props=>{
	const { addContact, current, clearCurrent, updateContact } = useContext(ContactContext)
	const { setAlert } = useContext(AlertContext)
	useEffect(()=>{
		current ? setContact(current) : setContact({
			name:"",
			email:"",
			type:"personal",
			phone:""
		})
	},[current])
	const [contact, setContact] = useState({
		name:"",
		email:"",
		type:"personal",
		phone:""
	})

	const { name, phone, email,type } = contact
	const onChange = e =>{
		setContact({
			...contact,
			[e.target.name]: e.target.value
		})
	}
	const onSubmit = e =>{
		e.preventDefault()
		if (name === "" ) return setAlert('Name field cannot be empty', 'danger')
		if (email === "" ) return setAlert('Email field cannot be empty', 'danger')

		!current ? addContact(contact) : updateContact(contact)
		setContact({
			name:"",
			email:"",
			type:"personal",
			phone:""
		})
	}

	const clearHandler = ()=>{
		clearCurrent()
	}
	return(
		<Fragment>
			<form onSubmit={onSubmit}>
				<h2 className = "text-center">{ current ? "Update" : "Add"} Contact</h2>
				<input type="text" name="name" placeholder="Enter name" value={name} onChange={onChange} />
				<input type="email" name="email" placeholder="Enter email" value={email} onChange={onChange} />
				<input type="text" name="phone" placeholder="Enter phone" value={phone} onChange={onChange} />
				<h5>Contact type</h5>
				<input type="radio" name="type" value="personal" checked ={type==="personal"}  onChange={onChange} /> Personal {" "}
				<input type="radio" name="type" value="professional" checked ={type==="professional"} onChange={onChange} /> Professional
				<input type="submit" className="btn btn-success btn-block" value={current ? "Update" : "Save"} />
			</form>
			{ current && <input type="submit" className="btn btn-light btn-block" value="Clear" onClick={  clearHandler } />}
		</Fragment>
	)
}

export default ContactForm