import axios from 'axios';
import { useEffect, useMemo, useReducer } from 'react';
import { getAuthQueryParams } from '../../utils';
import { Action, requestTypes, State } from '../../types/request';

const useFetch = <T>(url: string): [T, boolean, boolean] => {
  const [{ data, isLoading, isError }, dispatch] = useReducer(requestReducer, {
    ...requestReducer.initialState,
  });

  const marvelApi = useMemo(() => {
    return axios.create({
      baseURL: 'http://gateway.marvel.com/v1/public/',
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    dispatch({ type: requestTypes.REQUESTED });

    marvelApi
      .get(url + getAuthQueryParams(), { signal: controller.signal })
      .then(({ data: result }) => {
        dispatch({
          type: requestTypes.RECEIVED,
          data: result?.data,
        });
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log(`request cancelled`);
        } else {
          console.log(`error: ${err}`);
          dispatch({ type: requestTypes.ERROR, isError: true });
        }
      });
    return () => {
      controller.abort('request cancelled - unmount');
    };
  }, [url, marvelApi]);

  return [data as T, isLoading, isError];
};

function requestReducer<T>(
  state: State<T> = requestReducer.initialState,
  action: Action<T>,
): State<T> {
  switch (action.type) {
    case requestTypes.REQUESTED:
      return {
        ...requestReducer.initialState,
        isLoading: true,
        isError: false,
      };
    case requestTypes.RECEIVED:
      return {
        ...requestReducer.initialState,
        data: action.data,
        isLoading: false,
        isError: false,
      };
    case requestTypes.ERROR:
      return {
        ...requestReducer.initialState,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

requestReducer.initialState = {
  data: null,
  isLoading: false,
  isError: false,
};

export default useFetch;
