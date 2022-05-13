const { Router } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const routes = require('express').Router();
const Contacts = require('../DB/Contacts');


routes.get('/', (req, res) => {
  res.send('Home');
});

routes.get('/contacts',async ( req, res) => {
  console.log("Getting Stuff...")
  try{
    const allContacts = await Contacts.find();
    res.json(allContacts);
  }catch(err){
    res.json({message:err});
  }
});

routes.get('/contacts/:contactID',async ( req, res) => {
  console.log("Getting contact...")
  try{
    const contactsByID = await Contacts.findById(req.params.contactID);
    res.json(contactsByID);
  }catch(err){
    res.json({message:err});
  }
});

routes.post('/contacts/',async ( req, res) => {
  console.log("Adding contact...")
  try{
    const contact = new Contacts({
      irstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      favoriteColor: req.body.favoriteColor,
      favoriteFood: req.body.favoriteFood,
      favoriteGame: req.body.favoriteGame,
      birthday: req.body.birthday
    })
    const savedContact = await contact.save();
    res.json(savedContact);

  }catch(err){
    res.json({message:err});
  }
});

routes.delete('/contacts/:contactID', async (req,res) => {
  try{
    const removeContact = await Contacts.deleteOne({_id: req.params.contactID})
    res.json(removeContact)
  }catch(err){
    res.json({message:err});
  }
})

routes.put('/contacts/:contactID', async (req,res) => {
  try {
    const updateContact = await Contacts.updateOne(
      { _id: req.params.contactID },
      {$set:
        {firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          favoriteColor: req.body.favoriteColor,
          favoriteFood: req.body.favoriteFood,
          favoriteGame: req.body.favoriteGame,
          birthday: req.body.birthday}}
    );
    res.json(updateContact);
  }catch (err) {
    res.json({message: err})
  }
});
 

module.exports = routes;