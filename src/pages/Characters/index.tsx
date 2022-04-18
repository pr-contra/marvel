import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCharacters } from '../../services/marvelApi';
import { CharactersData } from '../../types/character';
import { debounce, isValidNumber } from '../../utils';
import { DEFAULT_PAGE, DEFAULT_ITEMS_PER_PAGE } from '../../constants/default';
import List from '../../components/List';
import Search from '../../components/Search';

const Characters = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = queryString.parse(search);
  const [characters, setCharacters] = useState({} as CharactersData);
  const [userSearch, setUserSearch] = useState('');
  const [page, setPage] = useState(() => {
    return isValidNumber(query.page) ? Number(query.page) : DEFAULT_PAGE;
  });
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    return isValidNumber(query.limit)
      ? Number(query.limit)
      : DEFAULT_ITEMS_PER_PAGE;
  });

  useEffect(() => {
    const fetchCharacters = async () =>
      await getCharacters(userSearch, page, itemsPerPage).then(
        (res: CharactersData) => {
          navigate(
            {
              search: `?page=${page}&limit=${itemsPerPage}${
                userSearch ? `&search=${userSearch}` : ''
              }`,
            },
            { replace: true },
          );
          setCharacters(res);
        },
      );

    fetchCharacters();
    console.log('render');
  }, [userSearch, page, itemsPerPage, navigate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(DEFAULT_PAGE);
    setUserSearch(e.target.value);
  };

  return (
    <main>
      <Search handleSearch={debounce(handleSearch, 300)} />
      <List characters={characters} />
    </main>
  );
};

export default Characters;
