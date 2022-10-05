import React, { useEffect, useState } from 'react';
import SearchInput from '../Search/SearchInput';
import SearchSelect from '../Search/SearchSelect';
import { partySearchFilters } from '../../util/searchFilters/partySearchFilters';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import axios from '../../util/apis/parties';
import LoadingSpinner from '../UI/LoadingSpinner';

export const PartyList = ({ partyType }) => {
  const urlQuery = `?partyType=${partyType}`;
  const [url, setUrl] = useState(urlQuery);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('name');
  const {
    response: parties,
    loading,
    error,
    setResponse: setParties,
    axiosFetch,
  } = useAxiosFunction();

  useEffect(() => {
    const getData = setTimeout(() => {
      axiosFetch({
        axiosInstance: axios,
        method: 'get',
        url: url,
      });
    }, 500);
    return () => clearTimeout(getData);
  }, [url]);

  // Resets search field when switching between CharacterList for players & enemies
  useEffect(() => setSearchTerm(''), [partyType]);

  // Sets the query url whenever searchTerm/searchFilter changes
  useEffect(() => {
    if (searchTerm) setUrl(urlQuery + `&filter=${searchFilter}&query=${searchTerm}`);
    else setUrl(urlQuery);
  }, [searchTerm, searchFilter, urlQuery]);

  const handleSearchTerm = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearchFilter = e => {
    setSearchFilter(e.target.value.toLowerCase());
  };

  return (
    <React.Fragment>
      <section className='row mt-3'>
        <div className='offset-4'>
          <SearchSelect
            name='filter'
            label='Filter'
            className='m-2'
            options={partySearchFilters}
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
        {loading && <LoadingSpinner />}
        {error && <div>{error}</div>}
        {parties &&
          parties.length > 0 &&
          parties.map(party => (
            <div key={party._id}>
              party={party.name} <br />
              partyType={partyType} <br />
              Party members:
              {party.characters.length > 0 &&
                party.characters.map(c => <div key={c._id}>{c.name}</div>)}
              <br />
            </div>
          ))}
        {/* {parties &&
        parties.map(party => (
          <PartyCard
            key={party._id}
            party={party}
            resourceType={resourceType}
            partyListState={{ parties, setParties }}
          />
        ))} */}
      </section>
    </React.Fragment>
  );
};
