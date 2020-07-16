import React from "react";
import { Container } from "semantic-ui-react";
import CategoryList from "./CategoryList";
import MainMenu from "./MainMenu";
import RecipeContainer from "./RecipeContainer";
const HomePage = () => {
  return (
    <div>
      <MainMenu />
      <Container style={{ marginTop: "5em" }}>
        <RecipeContainer/>
        <CategoryList />
      </Container>
    </div>
  );
};

export default HomePage;
