//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Name: String,
    PhoneNumber: String,
    Email: String,
    Notes: String
},
{
    collection:"contacts"
});
module.exports =mongoose.model('Book',bookModel);
