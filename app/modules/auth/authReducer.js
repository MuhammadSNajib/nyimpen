const initialState = {
  accessToken: ''
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACCESS_TOKEN':
      return { ...state, accessToken: action.access_token }
    default:
      return state
  }
}