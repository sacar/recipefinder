import React from 'react';
import { Container, Menu} from "semantic-ui-react";
import SearchRecipe from "./SearchRecipe";

const MainMenu = () => {
  return(
    <Menu fixed="top" inverted widths={3}>
        <Container>
          <Menu.Item header >
           TheMealDB
          </Menu.Item>
          <Menu.Item><SearchRecipe /></Menu.Item>
          {/* <Menu.Item>Hey</Menu.Item> */}
        </Container>
      </Menu>
  );
}

export default MainMenu;