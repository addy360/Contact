const express = require('express')
const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contact')
const usersRoutes = require('./routes/users')
const { db } = require('./config/db')


const app = express()
const PORT = process.env.PORT || 8080

app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/users', usersRoutes)

db()
.then(con=>{
	app.listen(PORT, console.log(`Server listening at port ${PORT}`))
})
.catch(err=>{
	console.log(err.message)
})