import * as React from 'react';

import RecipeLibrary from './components/RecipeLibrary';
import Schedule from './components/Schedule';

class App extends React.Component {

  recipeFixture = [
    {
      "id": "iedjwidjiew",
      "name": "ziemniaki"
    },
    {
      "id": "ifupwiedpds",
      "name": "mizeria"
    }
  ];

  scheduleItemsFixture = ['rwerer','ewrwrfsd','sdfdf'];

  public render() {
    return (
      <div>
        <RecipeLibrary items={this.recipeFixture}/>
        <Schedule  items={this.scheduleItemsFixture}/>
      </div>
    );
  }
}

export default App;
