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
  const characterType = resourceType === ApiEndpoint.PLAYER ? 'players' : 'enemy';

  return (
    <section className='row m-3'>
      {isPending && <LoadingSpinner />}
      {error && <div>{error}</div>}
      {characters && !characters.length && (
        <React.Fragment>
          <h3 className='text-center mb-3'>No {`${characterType}`} have been added</h3>
          <Link
            className='text-center btn btn-success col-md-2 offset-md-5 col-4 offset-4'
            to={`/create/${resourceType}`}>
            {addCharacterLabel}
          </Link>
        </React.Fragment>
      )}
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
    </section>
  );
};
