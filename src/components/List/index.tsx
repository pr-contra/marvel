import { ReactElement } from 'react';
import { Character, CharactersData } from '../../types/character';
import Loading from '../common/Loading';
import Card from './Card';

type ListProps = {
  characters?: CharactersData;
  isLoading: boolean;
  isError: boolean;
};

const List = ({ characters, isLoading, isError }: ListProps): ReactElement => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>Error</div>
      ) : (
        characters?.results?.map((character: Character) => {
          return <Card key={character.id} character={character} />;
        })
      )}
    </>
  );
};

export default List;
