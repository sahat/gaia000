import 'isomorphic-fetch'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import * as actions from '../../app/actions/app';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('app actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOAD_GAIA_SUCCESS action when data is fetched', () => {
    fetchMock.mock('/api', 'GET', {
      body: {
        term: {},
        titles: []
      }
    });

    const expectedActions = [
      { type: 'LOAD_GAIA_SUCCESS', data: { term: {}, titles: [] } }
    ];

    const store = mockStore({});

    return store.dispatch(actions.loadGaia())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('creates LOAD_GAIA_FAILURE action when http error occurs', () => {
    fetchMock.mock('/api', 'GET', 400);

    const expectedActions = [
      { type: 'LOAD_GAIA_FAILURE' }
    ];

    const store = mockStore({});

    return store.dispatch(actions.loadGaia())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
});
