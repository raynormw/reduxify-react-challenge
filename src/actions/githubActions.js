const API = 'https://api.github.com/users'

export function fetchUser(username) {
  let url = `${API}/${username}`;
  return function(dispatch) {
    dispatch({type: 'FETCH_USER'})
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: data
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
