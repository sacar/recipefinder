export const SAVE_RECIPE = 'SAVE_RECIPE';
export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  payload: {recipe},
});

export const LOAD_RECIPE_IN_PROGRESS = "LOAD_RECIPE_IN_PROGRESS";
export const loadRecipeInProgress = () => ({
  type: LOAD_RECIPE_IN_PROGRESS,
});

export const LOAD_RECIPE_SUCCESS = "LOAD_RECIPE_SUCCESS";
export const loadRecipeInSuccess = recipe => ({
  type: LOAD_RECIPE_SUCCESS,
  payload: { recipe }
});

export const LOAD_RECIPE_FAILURE = "LOAD_RECIPE_FAILURE";
export const loadRecipeFailure = () => ({
  type: LOAD_RECIPE_FAILURE,
});

export const LOAD_CATEGORIES_SUCCESS = "LOAD_CATEGORIES_SUCCESS";
export const loadCategoriesInSuccess = categories => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload: { categories }
});