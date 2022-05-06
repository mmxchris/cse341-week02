const express = require('express');
const mongoose = require('mongoose');
const Contacts = require('../DB/Contacts');
const route = express.Router();

route.post('/', async (req, res) => {
    const {
        firstName,
         lastName,
         email,
         favoriteColor,
         birthday
        } = req.body;
         let contacts = {};
         contacts.firstName = firstName;
         contacts.lastName = lastName;
         contacts.email = email;
         contacts.favoriteColor = favoriteColor;
         contacts.birthday = birthday;
         let contactsModel = new contacts(contacts);
         await contactsModel.save();
         res.json(contactsModel);     
});

module.exports = route;