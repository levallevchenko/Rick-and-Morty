import axios from 'axios';
import { ActionCreator } from './action';
// import axiosThrottle from 'axios-throttle';
import { Characters } from '../types/character';
import { AppDispatch } from '../index';

const TIMEOUT_IN_MS = 300;

// axiosThrottle.init(axios, TIMEOUT_IN_MS);

export const getCharacters = (url: string) => (dispatch: AppDispatch, _getState: any) => axios
  .get(url)
  .then(({ data }) => dispatch(ActionCreator.setCharacters(data.results)))
  .catch((err) => dispatch(ActionCreator.setError(err.message)));
