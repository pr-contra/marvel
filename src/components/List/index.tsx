import React, { ReactElement } from 'react';
import { Character, CharactersData } from '../../types/character';
import Card from './Card';

type ListProps = {
  characters: CharactersData;
};

const List = ({ characters }: ListProps): ReactElement => {
  return (
    <div>
      {characters?.results ? (
        characters?.results.map((character: Character) => {
          return <Card key={character.id} character={character} />;
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default List;
