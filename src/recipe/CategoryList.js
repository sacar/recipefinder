import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "./selectors";
import { fetchCategories } from "./thunks";
import { Item, Header } from "semantic-ui-react";
import Category from './Category';

const CategoryList = ({ categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <>
      <Header as="h2">Categories</Header>
      <Item.Group divided relaxed>
        {categories.map((category, index) => {
          return (
            <Category key={category.strCategory} category={category} />
          );
        })}
      </Item.Group>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
