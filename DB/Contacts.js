const mongoose = require('mongoose');

const contacts = new mongoose.Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        favoriteColor:{
            type:String
        },
        birthday:{
        type:String
        }
    }
);

module.exports = Contacts = mongoose.model('contacts', contacts);