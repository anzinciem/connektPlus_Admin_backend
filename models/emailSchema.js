const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    email:{
        type: String,
        index:true
    }
})

const emails = mongoose.model('emails',emailSchema)

module.exports = emails