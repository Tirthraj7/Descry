import {
  SET_LOGIN_USER,
  SET_LOGIN_FLAG,
  GET_INDIS
} from '../../actions/types/types'

const initState = {
  loginUser: {},
  loginFlag: true,
  inds: ''
}

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_INDIS: {
      return {
        ...state,
        inds: action.payload
      }
    }
    case SET_LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload.data,
        loginErrorFlag: false
      }
    case SET_LOGIN_FLAG:
      return { ...state, loginFlag: action.payload.data }
    default:
      return { ...state }
  }
}

export default LoginReducer
