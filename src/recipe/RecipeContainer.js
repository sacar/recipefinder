import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, Header, Image, Card, List } from "semantic-ui-react";
import { fetchRandomRecipe } from "./thunks";
import { getCurrentRecipe } from "./selectors";
// import styled from "styled-components";

// const IngridentSection = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-gap: 1rem;
// `;

// const Ingrident = styled.div`
//   vertical-align: top;
// `;

// const DescriptiptionText = styled.span`
//   white-space: pre-line;
// `;

const Recipe = ({ meal }) => {
  const mealDescription = meal.strInstructions.split("\n");
  const mealIngridents = [
    meal.strIngredient1,
    meal.strIngredient2,
    meal.strIngredient3,
    meal.strIngredient4,
    meal.strIngredient5,
    meal.strIngredient6,
    meal.strIngredient7,
    meal.strIngredient8,
    meal.strIngredient9,
    meal.strIngredient10,
    meal.strIngredient11,
    meal.strIngredient12,
    meal.strIngredient13,
    meal.strIngredient14,
    meal.strIngredient15,
    meal.strIngredient16,
    meal.strIngredient17,
    meal.strIngredient18,
    meal.strIngredient19,
    meal.strIngredient20,
  ];
  console.log(mealDescription);
  return (
    <>
      <Header as="h2">Random Recipe: {meal.strMeal}</Header>
      <Grid columns={12}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Card fluid>
              <Image src={meal.strMealThumb} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{meal.strMeal}</Card.Header>
                <Card.Meta>{meal.strCategory}</Card.Meta>
                <Card.Description>
                  <List>
                    {mealDescription.map((step, index) => {
                      console.log("step", index, step);
                      if (step !== "") {
                        return <List.Item key={index}>{step}</List.Item>;
                      } else {
                        return null;
                      }
                    })}
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Group itemsPerRow={4}>
              {mealIngridents.map((ingrident) => {
                if (ingrident === null || ingrident === "") {
                  return null;
                } else {
                  return (
                    <Card
                      image={`https://www.themealdb.com/images/ingredients/${ingrident}.png`}
                      header={ingrident}
                    />
                  );
                }
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const RecipeContainer = ({ currentRecipe, RandomRecipe }) => {
  useEffect(() => {
    RandomRecipe();
  }, [RandomRecipe]);

  return currentRecipe ? <Recipe meal={currentRecipe} /> : <></>;
};

const mapStateToProps = (state) => ({
  currentRecipe: getCurrentRecipe(state),
});

const mapDispatchToProps = (dispatch) => ({
  RandomRecipe: () => dispatch(fetchRandomRecipe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
