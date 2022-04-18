import React from 'react';
import { Character } from '../../types/character';
import '../../styles/List/card.css';

type CardProps = {
  character: Character;
};

const Card = ({ character }: CardProps) => {
  console.log(character);
  return (
    <div className="card">
      <img
        src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <div className="card__details">
        <h3 className="card__title">{character.name}</h3>
        <p className="card__description">{character.description}</p>
      </div>
    </div>
  );
};

export default Card;
