import axios from 'axios';
import { getCharactersEndpoint } from './endpoints';
import { CharactersData, CharactersRequest } from '../types/character';

const marvelApi = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
});

export const getCharacters = async (): Promise<CharactersData> =>
  await marvelApi
    .get<CharactersRequest>(getCharactersEndpoint())
    .then(({ data }) => {
      return data?.data;
    })
    .catch(error => console.error(error.message));
