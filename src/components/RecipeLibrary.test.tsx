import * as React from 'react';
import * as enzyme from 'enzyme';
import RecipeLibrary from './RecipeLibrary';

it('RecipeLibrary container is displayed', () => {
  const recipeLibrary = enzyme.shallow(<RecipeLibrary/>);
  const container = recipeLibrary.find({"data-test": 'recipeLibrary'});
  expect(container.length).toEqual(1);
});

describe("RecipeLibrary", () => {

    const items = [
      {
        "id": "iedjwidjiew",
        "name": "ziemniaki"
      },
      {
        "id": "ifupwiedpds",
        "name": "mizeria"
      }
    ];

  it("contains no items message when no items are given", () => {
    const recipeLibrary = enzyme.shallow(<RecipeLibrary/>);
    const noItemsMsg = recipeLibrary.find({"data-test": 'noItemsMsg'});
    expect(noItemsMsg.text()).toEqual('Nie masz jeszcze żadnych przepisów.');
  });
  it("contains no items message when empty array is given as items", () => {
    const recipeLibrary = enzyme.shallow(<RecipeLibrary items={[]}/>);
    const noItemsMsg = recipeLibrary.find({"data-test": 'noItemsMsg'});
    expect(noItemsMsg.text()).toEqual('Nie masz jeszcze żadnych przepisów.');
  });
  it("contains items list when items are given", () => {
    const recipeLibrary = enzyme.shallow(<RecipeLibrary items={items}/>);
    const container = recipeLibrary.find({"data-test": 'itemList'});
    expect(container.length).toEqual(1);
  });
  it("contains items names when items are given", () => {
    const recipeLibrary = enzyme.shallow(<RecipeLibrary items={items}/>);
    const container = recipeLibrary.find({"data-test": 'itemList'});
    expect(container.text()).toContain('ziemniaki');
    expect(container.text()).toContain('mizeria');
  });
  it("contains Buttons when items are given", () => {
    const recipeLibrary = enzyme.shallow(<RecipeLibrary items={items}/>);
    const container = recipeLibrary.find({"data-test": 'itemList'});
    const buttons = container.find('Button');
    expect(buttons.length).toEqual(2);
  });
  it('should call mock function when button is clicked', () => {
    const mockFn = jest.fn();
    const recipeLibrary = enzyme.mount(<RecipeLibrary items={items} addToSchedule={mockFn}/>);
    const container = recipeLibrary.find({"data-test": 'itemList'});
    const button = container.find('Button').first();
    expect(button.length).toEqual(1);
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});



