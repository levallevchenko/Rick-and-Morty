import {ActionCreator} from './action';
import axios from 'axios';
import axiosThrottle from 'axios-throttle';

const TIMEOUT_IN_MS = 300;

axiosThrottle.init(axios, TIMEOUT_IN_MS);

const GET_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = () => (dispatch, _getState) => (
  axios.get(GET_URL)
    .then(({data}) => dispatch(ActionCreator.setCharacters(data.results)))
);
