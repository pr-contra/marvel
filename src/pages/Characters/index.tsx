import React, { useEffect, useState, useMemo, useCallback } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { CharactersData } from '../../types/character';
import { debounce, isValidNumber } from '../../utils';
import {
  DEFAULT_PAGE,
  DEFAULT_ITEMS_PER_PAGE,
  DEBOUNCE_TIMEOUT,
} from '../../constants';
import List from '../../components/List';
import Search from '../../components/Search';
import useFetch from '../../services/hooks/useFetch';
import { getCharactersEndpoint } from '../../services/endpoints';
import '../../styles/characters.css';

const Characters = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const query = queryString.parse(search);
  const [userSearch, setUserSearch] = useState<string>(
    query.search ? String(query.search) : '',
  );

  const [page, setPage] = useState<number>(() => {
    return isValidNumber(query.page) ? Number(query.page) : DEFAULT_PAGE;
  });
  const [itemsPerPage, setItemsPerPage] = useState<number>(() => {
    return isValidNumber(query.limit)
      ? Number(query.limit)
      : DEFAULT_ITEMS_PER_PAGE;
  });

  const charactersEndpoint = useMemo(
    () => getCharactersEndpoint(userSearch, page, itemsPerPage),
    [userSearch, page, itemsPerPage],
  );
  const [characters, isLoading, isError] =
    useFetch<CharactersData>(charactersEndpoint);

  useEffect(() => {
    if (!isLoading && characters) {
      navigate(
        {
          search:
            `?page=${page}&limit=${itemsPerPage}` +
            `${userSearch ? `&search=${userSearch}` : ''}`,
        },
        { replace: true },
      );
    }
  }, [characters, isLoading, page, itemsPerPage, userSearch, navigate]);

  const handleSearch = useCallback((value: string) => {
    setPage(DEFAULT_PAGE);
    setUserSearch(value.trim());
  }, []);

  const handleClear = useCallback(() => {
    setPage(DEFAULT_PAGE);
    setUserSearch('');
  }, []);

  return (
    <main className="main">
      <Search
        handleSearch={debounce(handleSearch, DEBOUNCE_TIMEOUT)}
        handleClear={handleClear}
        userSearch={userSearch}
      />
      <List characters={characters} isLoading={isLoading} isError={isError} />
    </main>
  );
};

export default Characters;
