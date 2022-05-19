import { store } from '../redux/storeConfig/store'

import { history } from '../history'
import { setLoginFlag, setLoginUser } from '../redux/actions/login/loginAction'
import config from '../config'
// import {toastr} from 'react-redux-toastr';

const axios = require('axios')

export const api = async (endpoint, data, type) => {
  var res
  var token = store.getState().login.loginUser.token
  // console.log(token, endpoint);
  switch (type) {
    case 'post':
      await axios({
        data: data,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token
        },
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user')
            store.dispatch(setLoginFlag(false))
            store.dispatch(setLoginUser({}))
            history.push('/login')
          }
        })
      break
    case 'get':
      await axios({
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token
        },
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user')
            store.dispatch(setLoginFlag(false))
            store.dispatch(setLoginUser({}))
            history.push('/login')
          }
        })
      break
    case 'put':
      await axios({
        method: 'put',
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token
        },
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user')
            store.dispatch(setLoginFlag(false))
            store.dispatch(setLoginUser({}))
            history.push('/login')
          }
        })
      break
    case 'delete':
      await axios({
        data: data,
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token
        },
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          if (err.response.status === 400) {
            res = err.response
          }
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            localStorage.removeItem('user')
            store.dispatch(setLoginFlag(false))
            store.dispatch(setLoginUser({}))
            history.push('/login')
          }
        })
      break
    case 'postWithoutToken':
      await axios({
        method: 'post',
        data: data,
        headers: {
          'Content-Type': 'application/json'
        },
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          res = err.response
        })
      break
    case 'getWithoutToken':
      await axios({
        method: 'get',
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          res = err.response
        })
      break
    case 'patch':
      await axios({
        method: 'patch',
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'x-auth': token
        },
        url: config.mainUrl + endpoint
      })
        .then(function (response) {
          res = response
        })
        .catch(err => {
          res = err.response
        })
      break
    default:
      return true
  }

  // var parsdata = await checkData(res);
  return res
}

export const checkData = data => {
  return true
}
