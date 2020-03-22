const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator');
const User = require('../model/User')

exports.getAuth = (req, res, next )=>{
	User.findById(req.user.id).select('-password')
	.then(user=>{
		if (!user) return res.send(500).send("Server error")
		res.json(user)
	})
	.catch(err=>{
		console.log(err.message)
		return res.send(500).send("Server error")
	})
}

exports.postAuth = (req, res, next )=>{
	const errors = validationResult(req)
	if(!errors.isEmpty()) return res.status(400).json({errors})
	const { email, password } = req.body
	User.findOne({email})
	.then(user=>{
		if (!user) return res.status(400).json({msg:'Invalid credentials'})
		return bcrypt.compare(String(password), user.password).then( result => {
			if (!result) return res.status(400).json({msg:'Invalid credentials'})

			const payload ={
				user:{
					id:user._id
				}
			}

			jwt.sign(payload,config.get('jwtSecret'),{expiresIn:3600},(err, token)=>{
				if (err) return console.log(err.message)
		    	res.json({token})
			})
		});
	})
	.catch(err=>{
		res.status(500).send("Server error")
		console.log(err)})
	// res.json({msg:"POST AUTH"})
}