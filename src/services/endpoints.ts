import { getTimestamp, getHash } from '../utils';

const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';

export const getCharactersEndpoint = (): string => {
  const ts = getTimestamp();
  const hash = getHash();

  return `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
};
