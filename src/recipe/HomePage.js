import React, { useEffect } from "react";
import { getRecipe, getCategories } from "./selectors";
import { findRecipe, fetchCategories } from "./thunks";
import { connect } from "react-redux";
import { Container, Item } from "semantic-ui-react";
import MainMenu from "./MainMenu";

const HomePage = ({ categories, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div>
      <MainMenu />
      <Container style={{ marginTop: "7em" }}>
        <h3>Categories</h3>
        <Item.Group divided relaxed>
          {categories.map((category, index) => {
            return (
              <Item key={category.strCategory}>
                <Item.Image size="small" src={category.strCategoryThumb} />
                <Item.Content>
                  <Item.Header as="a">{category.strCategory}</Item.Header>
                  <Item.Description>
                    <p>{category.strCategoryDescription}</p>
                  </Item.Description>
                </Item.Content>
              </Item>
            );
          })}
        </Item.Group>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: getRecipe(state),
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  findRecipe: (recipe) => dispatch(findRecipe(recipe)),
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
