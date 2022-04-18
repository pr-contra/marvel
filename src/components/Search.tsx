import React, { ReactElement } from 'react';
import { RiSearchLine, RiFilter2Line } from 'react-icons/ri';
import '../styles/Search/index.css';

type SearchProps = {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ handleSearch }: SearchProps): ReactElement => {
  return (
    <div className="search">
      <RiSearchLine size={20} />
      <div className="search__vertical" />
      <input
        id="search"
        aria-label="character"
        type="text"
        placeholder="Search character"
        onChange={handleSearch}
        className="search__input"
      />
      <button
        aria-label="filters"
        className="search__filters"
        onClick={() => alert('Filter')}
      >
        <RiFilter2Line size={20} />
      </button>
    </div>
  );
};

export default Search;
