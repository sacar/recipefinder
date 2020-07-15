import {
  SAVE_RECIPE,
  LOAD_RECIPE_FAILURE,
  LOAD_RECIPE_IN_PROGRESS,
  LOAD_CATEGORIES_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  categories: [],
  data: [],
};

export const recipes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_RECIPE: {
      const { recipe: newRecipe } = payload;
      if (state.data.filter(recipe => recipe.idMeal === newRecipe.idMeal).length < 1) {
        return { isLoading: false, data: state.data.concat(newRecipe) };
      } else {
        return {...state, isLoading: false };
      }
      
    }

    case LOAD_CATEGORIES_SUCCESS: {
      const { categories: categoriesList } = payload;
      return { ...state, categories: categoriesList }
    }

    case LOAD_RECIPE_IN_PROGRESS: {
      return { ...state, isLoading: true };
    }

    case LOAD_RECIPE_FAILURE: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
