const initialState = {
  term: null,
  titles: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_GAIA_FAILURE':
      return Object.assign({}, state, {
        error: action.messages
      });
    case 'LOAD_GAIA_SUCCESS':
      return Object.assign({}, state, {
        term: action.data.term,
        titles: action.data.titles
      });
    default:
      return state;
  }
}
