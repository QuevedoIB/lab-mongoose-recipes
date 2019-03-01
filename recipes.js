const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('./data.js');

const Recipes = require('./recipes-schema')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


// Recipes.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));

// Recipes.find({}, { title: true })
//   .then(result => {
//     console.log(result)
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));


// Recipes.findByIdAndUpdate('5c79141d59a86d3eab417d6c', { duration: 100 }, { new: true })
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(error));

// Recipes.findByIdAndRemove('5c79141d59a86d3eab417d6b')
//   .then(result => {
//     console.log('Succesfully removed');
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));

// mongoose.connection.close();