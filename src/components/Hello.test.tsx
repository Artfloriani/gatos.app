import * as enzyme from 'enzyme';
import * as React from 'react';
import * as sinon from 'sinon';
import Hello from './Hello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1}/>);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".decrement").text()).toEqual('-');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
  }).toThrow();
});

it('should call onIncrement when clicking + button', () => {
  const onButtonClick = sinon.spy();
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} onIncrement={onButtonClick}/>);
  hello.find(".increment").simulate('click');

  expect(onButtonClick).toHaveProperty('callCount', 1);
})

it('should call onDecrement when clicking - button', () => {
  const onButtonClick = sinon.spy();
  const hello = enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={1} onDecrement={onButtonClick}/>);
  hello.find(".decrement").simulate('click');

  expect(onButtonClick).toHaveProperty('callCount', 1);
})