const mongoose = require('mongoose')
const config = require('config')

const URI = config.get('mongoURI')

mongoose.Promise = Promise

exports.db = ()=>{
	return mongoose.connect(URI,{
		useNewUrlParser: true,
  		useUnifiedTopology: true,
  		useCreateIndex:true,
  		useFindAndModify:false
	})
}