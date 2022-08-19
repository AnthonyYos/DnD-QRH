import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import useFetch from '../../hooks/useFetch';
import ApiEndpoint from '../../context/ResourceType';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

export const CharacterList = ({ resourceType }) => {
  const apiUrl = `/api/v1/${resourceType}`;
  const [url, setUrl] = useState(apiUrl);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   setUrl(`/api/v1/${resourceType}`);
  // }, [resourceType]);

  const { data: characters, isPending, error, setData: setCharacters } = useFetch(url);

  useEffect(() => setSearch(''), [apiUrl]);

  useEffect(() => {
    const searchLookup = setTimeout(() => {
      if (search) {
        setUrl(apiUrl + `?query1=${search}`);
      } else setUrl(apiUrl);
    }, 500);
    return () => {
      clearTimeout(searchLookup);
    };
  }, [search, apiUrl]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const addCharacterLabel = resourceType === ApiEndpoint.PLAYER ? 'Add Player' : 'Add Enemy';
  const characterType = resourceType === ApiEndpoint.PLAYER ? 'Player(s)' : 'Enemy / Enemies';

  return (
    <section className='row m-3'>
      <input type='text' onChange={handleSearch} value={search} />
      {isPending && <LoadingSpinner />}
      {error && <div>{error}</div>}
      {characters && !characters.length && (
        <React.Fragment>
          <h3 className='text-center mb-3'>No {`${characterType}`} were found</h3>
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
