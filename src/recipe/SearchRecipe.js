import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { findRecipe } from "./thunks";
import { connect } from "react-redux";

const SearchRecipe = ({ findRecipe }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
      fluid
      action={{ icon: "search", onClick: () => findRecipe(inputValue) }}
      placeholder="Search..."
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  findRecipe: (recipe) => dispatch(findRecipe(recipe)),
});
export default connect(null, mapDispatchToProps)(SearchRecipe);
