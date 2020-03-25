import React , { useContext }from 'react'
import ContactContext from '../../../context/contact/ContactContext'

const ContactItem = props=>{
	const { deleteContact, setCurrent, clearCurrent } = useContext(ContactContext)
	const { contact } = props
	const deleteHandler = e =>{
		clearCurrent()
		deleteContact(contact._id)
	} 
	const editHandler = e => setCurrent(contact)
	return(
		<div className="card bg-light">
			<h3 className="text-primary text-left">
				{contact.name} {' '} 
				<span style={{float:'right'}} className={`badge badge-${contact.type.toLowerCase() === "professional" ? "success" : "primary"}`}>
					{contact.type.charAt(0).toUpperCase().concat(contact.type.slice(1))}
				</span>
			</h3>
			<ul className="list">
				{contact.email && <li><i className="fas fa-inbox"></i> {contact.email}</li> }
				{contact.phone && <li><i className="fas fa-blender-phone"></i> {contact.phone}</li> }
			</ul>
			<p>
				<button className="btn btn-dark btn-sm" onClick={editHandler}>Edit</button> 
				<button className="btn btn-danger btn-sm" onClick={ deleteHandler } >Delete</button> 
			</p>
		</div>
	)
}

export default ContactItem