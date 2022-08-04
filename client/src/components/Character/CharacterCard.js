import React, { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import CharacterHeader from './CharacterCard/CharacterHeader';
import CharacterStats from './CharacterCard/CharacterStats';
import Button from '../UI/Button';

export default function CharacterCard({ character, type }) {
  const { getEnemy, deleteEnemy } = useContext(CharacterContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get(`api/v1/enemies/${enemyID}`);
  //     setEnemyState(res.data.data);
  //   };
  //   fetchData();
  // }, []);

  const deleteHandler = () => {
    if (type === 'enemy') return deleteEnemy(character._id);
  };
  const getHandler = () => {
    if (type === 'enemy') return getEnemy(character._id);
  };

  return (
    <section className='col-sm-4 mb-4'>
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
          <div className='row'>
            <Button className='btn btn-info col-lg-3 offset-lg-2 col-md-5' onClick={getHandler}>
              Update
            </Button>
            <Button
              className='btn btn-danger col-lg-3 offset-lg-2 col-md-5 offset-md-2'
              onClick={deleteHandler}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
