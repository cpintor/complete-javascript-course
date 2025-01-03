import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

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
    resultsView.renderSpinner();
    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Load search results
    await model.loadSearchResults(query);

    // 3. Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4. Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1. Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 4. Render NEW initial pagination buttons
  paginationView.render(model.state.search);
};

// Publisher subscriber pattern
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
