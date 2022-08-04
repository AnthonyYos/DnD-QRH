import React, { useContext } from 'react';
import { CharacterContext } from '../../../context/CharacterContext';
import CharacterHeader from './CharacterHeader';
import CharacterStats from './CharacterStats';
import Button from '../../UI/Button';

export default function CharacterCard({ character, type }) {
  const { getEnemy, deleteEnemy } = useContext(CharacterContext);

  const deleteHandler = () => {
    if (type === 'enemy') return deleteEnemy(character._id);
  };
  const getHandler = () => {
    if (type === 'enemy') return getEnemy(character._id);
  };

  return (
    <div className='col-sm-4 mb-4'>
      <div className='card'>
        <div className='card-body'>
          <CharacterHeader
            name={character.name}
            health={character.health}
            armorClass={character.armorClass}
            speed={character.speed}
            alignment={character.alignment}
            race={character.race}
          />
          <CharacterStats stats={character.stats} />
          <section className='row'>
            <Button
              className='btn btn-info col-lg-3 offset-lg-2 col-md-5 col-4 offset-1'
              onClick={getHandler}>
              Update
            </Button>
            <Button
              className='btn btn-danger col-lg-3 offset-lg-2 col-md-5 offset-md-2 col-4 offset-2'
              onClick={deleteHandler}>
              Delete
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
