import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';
import apiFixture from '../fixtures/api.json';
import Home from '../../app/components/Home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home component', () => {
  it('displays loading state', () => {
    const initialState = {
      app: {
        titles: []
      }
    };
    const component = shallow(<Home store={mockStore(initialState)}/>).shallow();
    const loadingDiv = <div className="Home__loading">Please wait...</div>;
    expect(component.containsMatchingElement(loadingDiv)).to.equal(true);
  });

  it('contains thumbnails and load more button', () => {
    const initialState = {
      app: {
        titles: apiFixture.app.titles
      }
    };
    const component = render(<Home store={mockStore(initialState)}/>);
    expect(component.find('.Thumbnail')).to.have.length(16);
    expect(component.find('.Home__btn-load')).to.be.ok;
  });
});
