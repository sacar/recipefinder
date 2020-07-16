import {
  SAVE_RECIPE,
  LOAD_RECIPE_FAILURE,
  LOAD_RECIPE_IN_PROGRESS,
  LOAD_CATEGORIES_SUCCESS,
} from "./actions";

const initialState = {
  isLoading: false,
  categories: [],
  currentRecipe: null,
};

export const recipes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_RECIPE: {
      const { recipe: newRecipe } = payload;
      return {...state, isLoading: false, currentRecipe: newRecipe };
      
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
