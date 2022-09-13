const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';




// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    
    const myNewRecipe = {
      title: "Pizza",
      level: "Easy Peasy",
      ingredients: ["cheese", "pep", "onions", "sausage"],
      cuisine: "Italian"
    }
    Recipe.create(myNewRecipe).then( () => {
      console.log({title: "pizza"});
      mongoose.disconnect();
    }).catch(err => {
      mongoose.disconnect();
      throw err;
      })
    
    Recipe.create(data).then(myNewRecipe => {
      console.log('new recipes', myNewRecipe );
    }).then(() => {
     mongoose.disconnect();
     }).catch(err => {
      mongoose.disconnect();
      throw err;
    })

  //   Recipe.findByIdAndUpdate("631a9cac5958119f06ddbb6a", {duration:100}).then(updatedRecipe => {
  //     console.log({updatedRecipe});
  //    mongoose.disconnect();
  //    }).catch(err => {
  //     mongoose.disconnect();
  //     throw err;
  //   })
  // })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


