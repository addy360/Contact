const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const User = require('../model/User')

exports.postUser = (req, res, next )=>{
	const errors = validationResult(req)
	if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})
	const { name, email, password } = req.body
	
	User.findOne({email})
	.then(user =>{
		if(user)return res.status(400).json({msg:"Email is in use already"})
		 bcrypt.genSalt(10,(err, salt)=>{
			if (err) console.log(err.message)
			 bcrypt.hash(String(password) , salt, function(err, hash) {
		         new User({
		        	name, email,
		        	password:hash
		        })
		        .save()
		        .then(user=>{
		        	const payload = {
		        		user:{
		        			id:user._id
		        		}
		        	}

		        	jwt.sign(payload, config.get('jwtSecret'),{expiresIn:3600},(err, token)=>{
		        		if(err) throw err
		        		res.json({token})
		        	})
		        })
		        .catch(err=>console.log(err))
		    });
		})
	})
	.catch(err=>console.log(err.message))
}