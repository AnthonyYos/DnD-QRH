import React, { useContext, useEffect } from 'react';
import { EnemyContext } from '../../context/EnemyContext';
import CharacterCard from './CharacterCard';

export const CharacterList = props => {
  const { enemies, getEnemies } = useContext(EnemyContext);
  useEffect(() => {
    if (props.type === 'enemies') {
      getEnemies();
      console.log('characterlist useeffect enemies');
    }
    // if (props.type === 'heroes') {
    //   getHeroes();
    // }
  }, []);
  return (
    <React.Fragment>
      {props.type === 'enemies' ? (
        <div className='row m-3'>
          {enemies &&
            enemies.length > 0 &&
            enemies.map(character => (
              <CharacterCard key={character._id} character={character} type='enemy' />
            ))}
        </div>
      ) : (
        <h1>heroes</h1>
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
