import React, { useContext, useEffect } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import CharacterCard from './CharacterCard';
import CharacterType from '../../context/CharacterType';

export const CharacterList = ({ characterType }) => {
  const { enemies, getCharacters } = useContext(CharacterContext);
  useEffect(() => {
    getCharacters(characterType);
  }, []);

  return (
    <React.Fragment>
      {characterType === CharacterType.ENEMY ? (
        <div className='row m-3'>
          {enemies &&
            enemies.length > 0 &&
            enemies.map(character => (
              <CharacterCard key={character._id} character={character} type='enemy' />
            ))}
        </div>
      ) : (
        <h1>Players</h1>
        // <div className='row m-3'>
        //   {enemies &&
        //     enemies.length > 0 &&
        //     enemies.map(character => (
        //       <Character key={character._id} character={character} type='enemy' />
        //     ))}
        // </div>
      )}
    </React.Fragment>
  );
};
