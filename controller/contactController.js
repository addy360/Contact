exports.getContact = (req, res, next )=>{
	res.json({msg:"GET Contact"})
}

exports.postContact = (req, res, next )=>{
	res.json({msg:"POST Contact"})
}

exports.putContact = (req, res, next )=>{
	res.json({msg:"PUT Contact"})
}

exports.deleteContact = (req, res, next )=>{
	res.json({msg:"DELETE Contact"})
}