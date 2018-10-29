import * as React from 'react';

export interface Props {
  items?: { id: string, name: string }[];
}

function RecipeLibrary({items = []}: Props) {
  if (items.length > 0) {
      return (
      <div data-test="recipeLibrary">
        <ul data-test="itemList">
          {
            items.map(item => {
              return(<li key={item.id}>{item.name}</li>);
            })
          }
        </ul>
      </div>
    );
  }
  return (
    <div data-test="recipeLibrary">
      <p data-test="noItemsMsg">Nie masz jeszcze żadnych przepisów.</p>
    </div>
  );
}

export default RecipeLibrary;

// helpers
