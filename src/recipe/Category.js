import React from "react";
import { Item } from "semantic-ui-react";

const Category = ({ category }) => {
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
};

export default Category;
