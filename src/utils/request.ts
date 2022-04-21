import md5 from 'md5';

export const getTimestamp = (): Number => Number(new Date());

export const getHash = (): string => {
  const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';
  const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';

  return md5(getTimestamp() + privateKey + publicKey);
};

export const getAuthQueryParams = (): string => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';
  const ts = getTimestamp();
  const hash = getHash();

  return `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
};
