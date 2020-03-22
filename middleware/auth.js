const jwt = require('jsonwebtoken')
const config = require('config')

exports.isAuth = (req, res, next)=>{
	const token = req.header('x-auth-token')

	if (!token) return res.status(401).json({msg:"No token, I'm guessting you are not authorized :("})
		jwt.verify(token, config.get('jwtSecret'), (err, decoded)=> {
			if (decoded === undefined) return res.status(401).json({msg:"Token is not valid"})
			req.user = decoded.user
			next()
		});
}