import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, LOGIN } from '../actions/types';

const initialState = {
  idUser: 0,
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: [
          ...state.allCharacters.filter(
            (character) => character.gender === payload
          ),
        ],
      };

    case ORDER:
      return {
        ...state,
        myFavorites: [
          ...state.allCharacters.sort((a, b) => {
            if (a.id > b.id) return payload === 'Ascending' ? 1 : -1;
            if (a.id < b.id) return payload === 'Ascending' ? -1 : 1;
            return 0;
          }),
        ],
      };

    case LOGIN:
      return {
        ...state,
        idUser: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
