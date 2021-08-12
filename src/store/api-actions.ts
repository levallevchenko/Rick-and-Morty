import {ActionCreator} from './action';
import axios from 'axios';
// import axiosThrottle from 'axios-throttle';
import { Characters } from '../types/character';

const TIMEOUT_IN_MS = 300;

// axiosThrottle.init(axios, TIMEOUT_IN_MS);

export const getCharacters = (url: string) => (dispatch: any, _getState: any) => (
  axios.get(url)
    .then(({data}) => dispatch(ActionCreator.setCharacters(data.results)))
    .catch((err) => dispatch(ActionCreator.setError(err.message)))
);
