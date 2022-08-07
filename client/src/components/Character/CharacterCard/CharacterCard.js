import React from 'react';

import CharacterHeader from './CharacterHeader';
import CharacterStats from './CharacterStats';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import { deleteCharacter } from '../../../util/functions/delete';

export default function CharacterCard({ character, resourceType, characterListState }) {
  const deleteHandler = () => {
    const newList = characterListState.characters.filter(c => c._id !== character._id);
    characterListState.setCharacters(newList);
    return deleteCharacter(character._id, resourceType);
  };

  return (
    <div className='col-sm-4 mb-4'>
      <div className='card'>
        <div className='card-body'>
          <section className='row card-text'>
            <CharacterHeader
              name={character.name}
              health={character.health}
              armorClass={character.armorClass}
              speed={character.speed}
              alignment={character.alignment}
              race={character.race}
            />
          </section>
          <section className='row'>
            <CharacterStats stats={character.stats} className='col-md-6 col-6' />
          </section>
          <section className='row'>
            <Link
              className='btn btn-info col-lg-3 offset-lg-2 col-5'
              to={`/${resourceType}/${character._id}`}>
              Update
            </Link>
            <Button
              className='btn btn-danger col-lg-3 offset-lg-2 col-5 offset-2'
              onClick={deleteHandler}>
              Delete
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
