import {ActionCreator} from './action';
import axios from 'axios';

const GET_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = () => (dispatch, _getState) => (
  axios.get(GET_URL)
    .then(({data}) => dispatch(ActionCreator.setCharacters(data.results)))
);
