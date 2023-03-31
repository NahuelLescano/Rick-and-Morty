import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER } from '../actions/types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) =>  {
  switch(type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(fav => fav.id !== payload),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters.filter(character => character.gender === payload)]
      };

    case ORDER:
      return {
        ...state,
        myFavorites: [...state.allCharacters.sort((a, b) => {
          if (a.id > b.id) return payload === 'Ascending' ? 1 : -1;
          if (a.id < b.id) return payload === 'Ascending' ? -1 : 1;
          return 0;
        })],
      };

    default:
      return state;
  }
};

export default rootReducer;
