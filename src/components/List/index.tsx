import { ReactElement } from 'react';
import { Character, CharactersData } from '../../types/character';
import Card from './Card';

type ListProps = {
  characters?: CharactersData;
  isLoading: boolean;
  isError: boolean;
};

const List = ({ characters, isLoading, isError }: ListProps): ReactElement => {
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        characters?.results?.map((character: Character) => {
          return <Card key={character.id} character={character} />;
        })
      )}
    </div>
  );
};

export default List;
