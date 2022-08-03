import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnemyContext } from '../../context/EnemyContext';

export default function AddCharacter() {
  const [name, setName] = useState('');
  const { addEnemy } = useContext(EnemyContext);
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const newCharacter = {
      id: Math.floor(Math.random() * 100000),
      name,
      speed: 50,
      stats: { str: 5, dex: 5, con: 5, int: 5, wis: 5, cha: 5 },
      alignment: 'Neutral',
      race: 'dnd person',
      armorClass: 20,
      health: 50,
    };
    addEnemy(newCharacter);
    setName('');
    navigate('/enemies');
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
