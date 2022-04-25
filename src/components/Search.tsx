import React, { ReactElement, useState } from 'react';
import { RiSearchLine, RiFilter2Line, RiCloseLine } from 'react-icons/ri';
import '../styles/Search/index.css';

type SearchProps = {
  handleSearch: (value: string) => void;
  handleClear: () => void;
  userSearch: string;
};

const Search = ({
  handleSearch,
  handleClear,
  userSearch,
}: SearchProps): ReactElement => {
  const [localValue, setLocalValue] = useState(userSearch);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    handleSearch(e.target.value);
  };

  const handleClearInput = () => {
    setLocalValue('');
    handleClear();
  };

  return (
    <div className="search">
      <input
        aria-label="character"
        type="text"
        placeholder="Search character"
        value={localValue}
        onChange={handleChangeInput}
        className="search__input"
      />

      <div className="search__icons">
        <div className="search__icons--search">
          <RiSearchLine size={20} />
        </div>
        <div className="search__icons--clear" onClick={handleClearInput}>
          <RiCloseLine size={24} />
        </div>
      </div>

      <div
        aria-label="filters"
        className="search__filters"
        onClick={() => alert('Filter')}
      >
        <RiFilter2Line size={20} />
      </div>
    </div>
  );
};

export default Search;
