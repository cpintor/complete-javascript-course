import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

// state contains all the data we need
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

// Controller passing id
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    // removing underscores from API
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err} 🔥`);
    throw err;
  }
};

// Used by controller to search
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    // returning a new array
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    console.log(state.search.results);
  } catch (error) {
    console.error(`${err} 🔥`);
    throw err;
  }
};

loadSearchResults('pizza');
