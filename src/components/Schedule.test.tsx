import * as React from 'react';
import * as enzyme from 'enzyme';
import Schedule from './Schedule';

it('Schedule container is displayed', () => {
  const schedule = enzyme.shallow(<Schedule/>);
  const container = schedule.find({"data-test": 'Schedule'});
  expect(container.length).toEqual(1);
});

describe("RecipeLibrary", () => {
  const items = ['rwerer','ewrwrfsd','sdfdf'];

  it("renders correctly when no items are given", () => {
    const schedule = enzyme.shallow(<Schedule/>);
    expect(schedule.length).toEqual(1);
  });
  it("renders correctly when empty array is given as items", () => {
    const schedule = enzyme.shallow(<Schedule items={[]}/>);
    expect(schedule.length).toEqual(1);
  });
  it("contains items when given", () => {
    const schedule = enzyme.shallow(<Schedule items={items}/>);
    const scheduleItems = schedule.find({"data-test": 'item'});
    expect(scheduleItems.length).toEqual(items.length);
  });
});