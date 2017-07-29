const API = 'https://api.github.com/users'

export function fetchUser(username) {
  let url = `${API}/${username}`;
  return function(dispatch) {
    fetch(url)
      .then((res) => res.json() )
      .then((response) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error
        })
      })
  }
}
