let mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
   
    lastname : {
        type:String,
        required:true
    },

    gender :{
        type: String,
        required: true
    },

    age: Number,
    email: String,
    phone: String,

    create_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model('contact',contactSchema);

module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}