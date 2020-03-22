const { validationResult } = require('express-validator');
const User = require('../model/User')
const Contact = require('../model/Contact')

exports.getContact = (req, res, next )=>{
	Contact.find({user:req.user.id}).sort({date:-1})
	.then(contacts=>{
		return res.json(contacts)
	})
	.catch(err=>{
		console.log(err)
		return res.status(500).send("Server error")
	})
}

exports.postContact = (req, res, next )=>{
	const errors = validationResult(req)
	if(!errors.isEmpty()) return res.status(400).json({errors})

	const { name, email, type, phone } = req.body
	new Contact({
		name,email,type,phone,
		user:req.user.id
	}).save()
	.then(contact=>{
		res.json(contact)
	})
	.catch(err=>{
		console.log(err.message)
		res.status(500).send("Server error")
	})
}

exports.putContact = (req, res, next )=>{
	const { name, email, type, phone } = req.body
	const contacBody = {}
	if(name) contacBody.name = name 
	if(email) contacBody.email = email 
	if(type) contacBody.type = type 
	if(phone) contacBody.phone = phone 

	Contact.findById(req.params.id)
	.then(contact=>{
		if (!contact) return res.status(404).json({msg:"Contact not found"})
		if(contact.user.toString() !== req.user.id) return res.status(401).json({msg:"Not authorized"})
		Contact.findByIdAndUpdate(req.params.id,{$set:contacBody},{new:true})
		.then(contact=>{
			res.json(contact)
		})
	})
	.catch(err=>{
		console.log(err.message)
		return res.status(500).send("Server error")
	})
}

exports.deleteContact = (req, res, next )=>{
	Contact.findById(req.params.id)
	.then(contact=>{
		if (!contact) return res.status(404).json({msg:"Contact not found"})
		if(contact.user.toString() !== req.user.id) return res.status(401).json({msg:"Not authorized"})
		Contact.findByIdAndRemove(req.params.id)
		.then(contact=>{
			return res.json({msg:"Contact deleted"})
		})
	})
	.catch(err=>{
		console.log(err.message)
		return res.status(500).send("Server error")
	})
}