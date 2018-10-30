import * as React from 'react';

import RecipeLibrary from './components/RecipeLibrary';
import Schedule from './components/Schedule';

interface Props {}

interface State {
  scheduleItemsList: string[];
}

class App extends React.Component <Props, State> {

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

  state = {
    scheduleItemsList: []
  };

  addToSchedule = () =>  {}

  // addToSchedule = (recipeIdToAdd: string) =>  {
  //   if(!recipeIdToAdd) {
  //     throw new Error('No recipe ID given');
  //   }
  //
  //   // TODO unable to push - why?
  //   // let scheduleItemsList = this.state.scheduleItemsList.slice();
  //   // this.setState({ scheduleItemsList: scheduleItemsList.push(recipeIdToAdd)});
  // }

  public render() {
    return (
      <div>
        <RecipeLibrary items={this.recipeFixture} addToSchedule={this.addToSchedule}/>
        <Schedule  items={this.state.scheduleItemsList}/>
      </div>
    );
  }
}

export default App;
