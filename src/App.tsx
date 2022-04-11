import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import md5 from 'md5';

// Important links:
// Auth: https://developer.marvel.com/documentation/authorization
// Entities/Endpoints: https://developer.marvel.com/documentation/entity_types
// Image repo: https://developer.marvel.com/documentation/images

const baseURL = 'http://gateway.marvel.com/v1/public/';
const endpoint = 'characters';
const timestamp = Number(new Date());
const privateKey = process.env.REACT_APP_PRIVATE_KEY || '';
const publicKey = process.env.REACT_APP_PUBLIC_KEY || '';
const hash = md5(timestamp + privateKey + publicKey);

const App: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${baseURL}${endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
      )
      .then(res => setCharacters(res.data.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Marvel characters</h1>

      <div>
        <ul>
          {characters &&
            characters.map((character: any) => {
              return <li>{character.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default App;
