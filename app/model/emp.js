const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empSchema = new Schema({
    name : {
        type : String,
        required : true,
    }
})

const Employee = mongoose.model('Employee', empSchema)
module.exports = Employee