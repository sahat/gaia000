export function loadGaia() {
  return (dispatch) => {
    return fetch('/api', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: 'LOAD_GAIA_SUCCESS',
            data: json
          });
        });
      } else {
        dispatch({ type: 'LOAD_GAIA_FAILURE' });
      }
    });
  };
}
