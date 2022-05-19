import { SET_LOGIN_USER, SET_LOGIN_FLAG, SET_USER_REFRESHTOKEN, SET_USER_TOKEN } from "../types/types";

export const setLoginUser = (value) => {
  return {
    type: SET_LOGIN_USER,
    payload: { data: value },
  };
};

export const setLoginFlag = (value) => {
  // console.log('call', value)

  return {
    type: SET_LOGIN_FLAG,
    payload: { data: value },
  };
};

export const setAuthTokenAction = value => {
  return {
    type: SET_USER_TOKEN,
    payload: value,
  };
};

export const setAuthRefreshTokenAction = (value) => {
  return {
    type: SET_USER_REFRESHTOKEN,
    payload: { data: value },
  };
};