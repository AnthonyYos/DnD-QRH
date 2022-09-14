import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import useFetch from '../../hooks/useFetch';
import CharacterType from '../../util/CharacterType';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import SearchInput from '../Search/SearchInput';
import SearchSelect from '../Search/SearchSelect';
import { characterSearchFilters } from '../../util/searchFilters/characterSearchFilters';
import ApiUrl from '../../util/apiUrl';

export const CharacterList = ({ characterType }) => {
  const apiUrl = `${ApiUrl.CHARACTERS}?characterType=${characterType}`;
  const [url, setUrl] = useState(apiUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('name');

  const { data: characters, isPending, error, setData: setCharacters } = useFetch(url);

  // Resets search field when switching between CharacterList for players & enemies
  useEffect(() => setSearchTerm(''), [apiUrl]);

  // Sets a new url to be useed by useFetch when searchTerm/searchFilter changes
  useEffect(() => {
    const searchLookup = setTimeout(() => {
      if (searchTerm) setUrl(apiUrl + `&filter=${searchFilter}&query=${searchTerm}`);
      else setUrl(apiUrl);
    }, 500);
    return () => {
      clearTimeout(searchLookup);
    };
  }, [searchTerm, searchFilter, apiUrl]);

  const handleSearchTerm = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchFilter = e => {
    setSearchFilter(e.target.value.toLowerCase());
  };

  const addCharacterLabel = characterType === CharacterType.PLAYER ? 'Add Player' : 'Add Enemy';
  const noCharacterLabel = characterType === CharacterType.PLAYER ? 'Player(s)' : 'Enemy / Enemies';
  const addBtnLink = characterType === CharacterType.PLAYER ? `/create/players` : `/create/enemies`;

  return (
    <React.Fragment>
      {/* Search fields */}
      <section className='row mt-3'>
        <div className='offset-4'>
          <SearchSelect
            name='filter'
            label='Filter'
            className='m-2'
            options={characterSearchFilters}
            onChange={handleSearchFilter}
          />
          <SearchInput
            name='search'
            type='text'
            label='Search'
            placeholder={`Search by ${searchFilter}...`}
            value={searchTerm}
            className='m-2'
            onChange={handleSearchTerm}
          />
        </div>
      </section>
      <section className='row m-3'>
        {/* Display loading spinner, error, or button; when a request is made for data, an error occurs, or receive a response where there is no data*/}
        {isPending && <LoadingSpinner />}
        {error && <div>{error}</div>}
        {characters && !characters.length && (
          <React.Fragment>
            <h3 className='text-center mb-3'>No {`${noCharacterLabel}`} were found</h3>
            <Link
              className='text-center btn btn-success col-md-2 offset-md-5 col-4 offset-4'
              to={addBtnLink}>
              {addCharacterLabel}
            </Link>
          </React.Fragment>
        )}
        {/* If there is characters data, display them in the form of CharacterCard */}
        {characters &&
          characters.length > 0 &&
          characters.map(character => (
            <CharacterCard
              key={character._id}
              character={character}
              characterListState={{ characters, setCharacters }}
            />
          ))}
      </section>
    </React.Fragment>
  );
};
