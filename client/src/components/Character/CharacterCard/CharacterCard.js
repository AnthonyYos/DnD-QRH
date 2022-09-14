import React from 'react';

import CharacterHeader from './CharacterHeader';
import CharacterStats from './CharacterStats';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import { deleteResource } from '../../../util/functions/delete';
import ApiUrl from '../../../util/apiUrl';
import CharacterType from '../../../util/CharacterType';

export default function CharacterCard({ character, characterListState }) {
  const deleteHandler = () => {
    const url = `${ApiUrl.CHARACTERS}/${character._id}`;
    const res = deleteResource(url);
    const newList = characterListState.characters.filter(c => c._id !== character._id);
    characterListState.setCharacters(newList);
    return res;
  };

  const updateLink =
    character.type === CharacterType.PLAYER
      ? `/players/${character._id}`
      : `/enemies/${character._id}`;

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
          <section className='row mb-2'>
            <CharacterStats
              stats={character.stats}
              modifiers={character.modifiers}
              className='col-md-6 col-6'
            />
          </section>
          <section className='row mx-2'>
            <Link className='btn btn-info col-lg-3 offset-lg-2 col-5' to={updateLink}>
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
