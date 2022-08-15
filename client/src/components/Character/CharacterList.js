import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import useFetch from '../../hooks/useFetch';
import ApiEndpoint from '../../context/ResourceType';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

export const CharacterList = ({ resourceType }) => {
  const {
    data: characters,
    isPending,
    error,
    setData: setCharacters,
  } = useFetch(`/api/v1/${resourceType}`);

  const addCharacterLabel = resourceType === ApiEndpoint.PLAYER ? 'Add Player' : 'Add Enemy';

  return (
    <section className='row m-3'>
      {isPending && <LoadingSpinner />}
      {error && <div>{error}</div>}
      {characters &&
        characters.length > 0 &&
        characters.map(character => (
          <CharacterCard
            key={character._id}
            character={character}
            resourceType={resourceType}
            characterListState={{ characters, setCharacters }}
          />
        ))}
      {characters && !characters.length && (
        <Link
          className='text-center btn btn-success col-md-2 offset-md-5 col-4 offset-4'
          to={`/create/${resourceType}`}>
          {addCharacterLabel}
        </Link>
      )}
      {console.log(characters)}
    </section>
  );
};
