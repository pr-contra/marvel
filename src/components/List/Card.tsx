import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
import { Character } from '../../types/character';
import { parseDescription } from '../../utils';
import '../../styles/List/card.css';

type CardProps = {
  character: Character;
};

const Card = ({ character }: CardProps) => {
  const navigate = useNavigate();

  const description = parseDescription(character.description);

  return (
    <div
      className="card"
      onClick={() => navigate(`/characters/details/${character.id}`)}
    >
      <div className="card__content">
        <img
          src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
          alt={character.name}
          className="card__img"
        />
        <div className="card__details">
          <h3 className="card__title">{character.name}</h3>
          <p className="card__description">{description}</p>
        </div>
      </div>
      <div className="card__chevron">
        <IoChevronForward size={20} />
      </div>
    </div>
  );
};

export default Card;
