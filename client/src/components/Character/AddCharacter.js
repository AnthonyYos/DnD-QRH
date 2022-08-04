import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterContext } from '../../context/CharacterContext';
import CharacterType from '../../context/CharacterType';

export default function AddCharacter({ characterType }) {
  const [name, setName] = useState('');
  const { addCharacter } = useContext(CharacterContext);
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const newCharacter = {
      name,
      speed: 50,
      stats: { str: 5, dex: 5, con: 5, int: 5, wis: 5, cha: 5 },
      alignment: 'Neutral',
      race: 'Humanoid',
      armorClass: 20,
      health: 50,
    };

    addCharacter(newCharacter, characterType);
    switch (characterType) {
      case CharacterType.PLAYER:
        return navigate('/players');
      case CharacterType.ENEMY:
        return navigate('/enemies');
      default:
        return navigate('/');
    }
  };

  return (
    <React.Fragment>
      <form className='col-lg-6 offset-lg-3 card' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Name</label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Enter Name...'
          />
        </div>
        <button className='btn btn-success'>Add Enemy</button>
      </form>
    </React.Fragment>
  );
}
