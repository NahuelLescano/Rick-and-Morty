import axios from 'axios';

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, LOGIN } from './types';

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    return dispatch({
      type: ADD_FAV,
      payload: data,
    });
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

// A => ascending, D => descending
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const login = (email, password) => {
  const endpoint = `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}`;
  return async (dispatch) => {
    const { data } = await axios(endpoint);
    if (data.success) {
      dispatch({
        type: LOGIN,
        payload: data.id,
      });
    }
  };
};
