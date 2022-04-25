import { ReactElement } from 'react';
import { Character, CharactersData } from '../../types/character';
import Loading from '../common/Loading';
import Pagination from './Pagination';
import Card from './Card';

type ListProps = {
  characters?: CharactersData;
  itemsPerPage: number;
  page: number;
  setPage: (page: number) => void;
  isLoading: boolean;
  isError: boolean;
};

const List = ({
  characters,
  itemsPerPage,
  page,
  setPage,
  isLoading,
  isError,
}: ListProps): ReactElement => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>Error</div>
      ) : (
        <>
          {characters?.results?.map((character: Character) => {
            return <Card key={character.id} character={character} />;
          })}

          <Pagination
            itemsPerPage={itemsPerPage}
            total={characters?.total}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default List;
