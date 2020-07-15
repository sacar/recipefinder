import {
  loadRecipeInProgress,
  loadRecipeFailure,
  saveRecipe,
  loadCategoriesInSuccess,
} from "./actions";

export const findRecipe = (searchStr) => async (dispatch) => {
  try {
    dispatch(loadRecipeInProgress());
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`
    );
    const recipe = await response.json();
    console.log("find recipe");
    console.log(recipe);
    if (recipe.meals) {
      dispatch(saveRecipe(recipe.meals[0]));
    } else {
      dispatch(displayAlert("Cannot find the recipe"));
    }
  } catch (e) {
    dispatch(displayAlert(e));
    dispatch(loadRecipeFailure());
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(loadRecipeInProgress());
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const data = await response.json();
    console.log("categories");
    console.log(data);
    if (data.categories) {
      dispatch(loadCategoriesInSuccess(data.categories));
    } else {
      dispatch(displayAlert("Cannot fetch the categories"));
    }
  } catch (e) {
    dispatch(displayAlert(e));
    dispatch(loadRecipeFailure());
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
