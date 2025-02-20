const mongoose = require('mongoose')


mongoose
.connect('mongodb://127.0.0.1:27017/airportsDatabase')
.then(() => {
    console.log('Sucessfully Connected to MongoDB.')
})
.catch((e) => {
    console.error('Connection error', e.message)
})


mongoose.set('debug', true)


const db = mongoose.connection


module.exports = db