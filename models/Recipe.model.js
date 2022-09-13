const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: {
  type: String,
  enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },
  ingredients: {
    type: [{type: String}]
  },
  cuisine: String,
  dishType: String,
  enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'],
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: Number,
  creator: String,
}, {
  timestamp: true
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
