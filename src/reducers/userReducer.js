const initialState = {
  data: {
    login: 'raynormw',
    name:'',
    avatar_url:'',
    location:'',
    public_repos:'',
    followers: '',
    following:'',
    html_url:'',
    message:'',
  },
  fetching: false,
  fetched: false,
  error: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {...state, fetching: true}
    case 'FETCH_SUCCESS':
      return {...state, fetching: false, fetched: true, data: action.payload}
    case 'FETCH_ERROR':
      return {...state, fetching: false, error: action.payload}
    default:
      return state
  }
}
