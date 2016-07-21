import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import apiFixture from '../fixtures/api.json';
import Hero from '../../app/components/Hero';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Hero component', () => {
  it('should not be displayed if data is missing', () => {
    const initialState = {
      app: {
        term: null
      }
    };
    const component = shallow(<Hero store={mockStore(initialState)}/>);
    expect(component.contains('section')).to.equal(false);
  });

  it('contains hero title', () => {
    const initialState = {
      app: {
        term: apiFixture.app.term
      }
    };
    const component = render(<Hero store={mockStore(initialState)}/>);
    expect(component.find('h1.Hero__title')).to.have.length(1);
  });

  it('contains hero description', () => {
    const initialState = {
      app: {
        term: apiFixture.app.term
      }
    };
    const component = render(<Hero store={mockStore(initialState)}/>);
    expect(component.find('p.Hero__description')).to.have.length(1);
  });
});
