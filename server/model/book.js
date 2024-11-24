
// mongoose schema is made and model is also made to manage the collection in mongo

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
