import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
//import * as enzyme from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
// TODO addToSchedule is not seen probably by tslint
//
// describe("App", () => {
//   it('has method addToSchedule', () => {
//     const app = enzyme.shallow(<App/>);
//     const fn = app.instance().addToSchedule;
//     expect(typeof fn).toBe('function');
//   });
// });
//
// describe("App - addToSchedule", () => {
//   it('throws when called without ID', () => {
//     const app = enzyme.shallow(<App/>);
//     const fn = app.instance().addToSchedule;
//     expect(fn).toThrow();
//   });
//   // it('adds ID to the state.scheduleItems', () => {
//   // });
// });