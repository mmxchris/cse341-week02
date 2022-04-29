const routes = require('express').Router();
const Contacts = require('../DB/Contacts');

routes.get('/', (req, res) => {
  res.send('Home')
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

module.exports = routes;