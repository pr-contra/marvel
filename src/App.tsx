import React, { useEffect, useState } from 'react';
import { getCharacters } from './services/marvelApi';
import { CharactersData } from './types/character';

// Important links:
// Auth: https://developer.marvel.com/documentation/authorization
// Entities/Endpoints: https://developer.marvel.com/documentation/entity_types
// Image repo: https://developer.marvel.com/documentation/images

const App: React.FC = () => {
  const [characters, setCharacters] = useState({} as CharactersData);

  useEffect(() => {
    const fetchCharacters = async () =>
      await getCharacters().then((res: CharactersData) => setCharacters(res));

    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1>Marvel characters</h1>

      <div>
        <ul>
          {characters?.results &&
            characters?.results.map((character: any) => {
              return <li key={character.id}>{character.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
