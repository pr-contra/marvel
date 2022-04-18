import { getTimestamp, getHash } from '../utils';

const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';

export const getCharactersEndpoint = (
  userSearch: string,
  page: number,
  itemsPerPage: number,
): string => {
  const ts = getTimestamp();
  const hash = getHash();

  return (
    `/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}` +
    `&offset=${page}&limit=${itemsPerPage}` +
    `${userSearch ? `&nameStartsWith=${userSearch}` : ''}`
  );
};
