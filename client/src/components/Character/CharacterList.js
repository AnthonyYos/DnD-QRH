import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import useFetch from '../../hooks/useFetch';

export const CharacterList = ({ resourceType }) => {
  const {
    data: characters,
    isPending,
    error,
    setData: setCharacters,
  } = useFetch(`/api/v1/${resourceType}`);

  return (
    <section className='row m-3'>
      {characters &&
        characters.map(character => (
          <CharacterCard
            key={character._id}
            character={character}
            resourceType={resourceType}
            characterListState={{ characters, setCharacters }}
          />
        ))}
    </section>
  );
};
