import { setLoginUser, setLoginFlag } from '../login/loginAction'
import { api } from '../../../api/api'
import { history } from '../../../history'
import { toastr } from 'react-redux-toastr'
import { GET_INDIS } from '../types/types'

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

export const loginApi = value => {
  return async (dispatch, store) => {
    // dispatch(setloader(true));
    await api('v1/auth/login', value, 'postWithoutToken')
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        } else {
          // console.log("Else");
          localStorage.setItem('user', JSON.stringify(res.data.data))
          localStorage.setItem('isLogin', true)
          dispatch(setLoginFlag(true))
          dispatch(setLoginUser(res.data.data))
          toastr.success('Login Success')
          localStorage.setItem('first', res.data.data.purpose)
          if (res.data.data.purpose) {
            history.replace('/dashboard')
          } else {
            history.replace('/selectavtar')
          }
        }
      })
      .catch(err => { })
  }
}

export const signUp = value => {
  return async (dispatch, store) => {
    // dispatch(setloader(true));
    await api('v1/auth/user', value, 'postWithoutToken')
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        } else {
          toastr.success('Please Check Your Email Box')
          history.push('/login')
        }
      })
      .catch(err => { })
  }
}

export const forgetPassword = value => {
  return async (dispatch, store) => {
    // dispatch(setloader(true));
    await api('v1/auth/forgot-password', value, 'postWithoutToken')
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        } else {
          toastr.success('Please Check Your Email Box')
          history.push('/reset-password')
          localStorage.setItem('email', value.email)
        }
      })
      .catch(err => { })
  }
}

export const forgetPasswordSend = value => {
  return async (dispatch, store) => {
    // dispatch(setloader(true));
    await api('v1/auth/reset-password', value, 'postWithoutToken')
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        } else {
          toastr.success('Password Change Success')
          history.push('/login')
          localStorage.removeItem('email', value.email)
        }
      })
      .catch(err => { })
  }
}

export const getInds = () => {
  return async dispatch => {
    await api('v1/industry', {}, 'get')
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        } else {
          dispatch({ type: GET_INDIS, payload: res.data.data })
        }
      })
      .catch(err => { })
  }
}

export const changePassword = (data) => {
  return async (dispatch, store) => {
    // console.log("inside change password");
    await api(`v1/auth/change-password/${data.id}`, data, "patch")
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        }
        else {
          toastr.success('Password change successfully')
          history.push('/login')
          // localStorage.setItem('password', data.password)
        }
      })
      .catch(err => { })
  }
}

export const addAvatar = () => {
  return async dispatch => {
    await api('v1/auth/inital-user', {}, 'put')
      .then(res => {
        if (res.status === 400) {
          toastr.error(res.data.error)
        } else {
          toastr.success('Profile updated successfully')
        }
      })
      .catch(err => { })
  }
}
