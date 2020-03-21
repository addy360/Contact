const express = require('express')
const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contact')
const usersRoutes = require('./routes/users')


const app = express()
const PORT = process.env.PORT || 8080

app.use('/api/auth', authRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/users', usersRoutes)


app.listen(PORT, console.log(`Server listening at port ${PORT}`))