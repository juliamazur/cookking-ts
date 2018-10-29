import * as React from 'react';
import * as enzyme from 'enzyme';
import Button from './Button';

it('Button container is displayed', () => {
  const tree = enzyme.shallow(<Button/>);
  const container = tree.find({"data-test": 'button'});
  expect(container.length).toEqual(1);
});

describe("Button", () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = enzyme.shallow(<Button name='button test' />);
    expect(tree).toMatchSnapshot();
  });
  it('should have a button value', () => {
    const tree = enzyme.shallow(<Button name='button test' />);
    expect(typeof(tree.find({"data-test": 'button'}).props().value)).toBe('string');
    expect(tree.find({"data-test": 'button'}).props().value).toEqual('button test');
  });
  it('should call mock function when button is clicked', () => {
    const mockFn = jest.fn();
    const tree = enzyme.shallow(<Button name='button test' handleClick={mockFn} />);
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});