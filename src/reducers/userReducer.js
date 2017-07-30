const initialState = {
  data: {
    login: 'raynormw',
    name:'raynormw',
    avatar_url:'https://avatars2.githubusercontent.com/u/20145502?v=4',
    location:'Tangerang - Indonesia',
    public_repos:'34',
    followers: '3',
    following:'0',
    html_url:'https://github.com/raynormw',
    message:'',
  },
  fetching: false,
  fetched: false,
  error: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {...state, fetching: true, fetched: false}
    case 'FETCH_SUCCESS':
      return {...state, fetching: false, fetched: true, data: action.payload, error: null}
    case 'FETCH_ERROR':
      return {...state, fetching: false, fetched: false, error: action.payload}
    default:
      return state
  }
}
