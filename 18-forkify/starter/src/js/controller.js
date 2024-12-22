import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// Async function runs in the background
const controlRecipes = async function () {
  try {
    // Getting hash id from url to display content and removing # symbol
    const id = window.location.hash.slice(1);

    // guard clause to check if no id so no error is returned
    // old way to do this would be to wrap code below in the if statement
    if (!id) return;

    recipeView.renderSpinner();

    // 1. Loading recipe
    // Loading recipe to store in state object
    // async function that will return a promise
    await model.loadRecipe(id);

    // 2. Rendering recipe
    // taking data from step 1 and passed into render() in view file
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function (params) {
  try {
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

// Publisher subscriber pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
