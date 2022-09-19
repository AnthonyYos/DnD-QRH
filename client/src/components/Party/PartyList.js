import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import SearchInput from '../Search/SearchInput';
import SearchSelect from '../Search/SearchSelect';
import { partySearchFilters } from '../../util/searchFilters/partySearchFilters';
import ApiUrl from '../../util/apiUrl';

export const PartyList = ({ partyType }) => {
  const apiUrl = `${ApiUrl.PARTY}?partyType=${partyType}`;
  const [url, setUrl] = useState(apiUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilter, setSearchFilter] = useState('party name');

  const { data: parties, isPending, error, setData: setParties } = useFetch(url);

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
        {parties &&
          parties.length > 0 &&
          parties.map(party => (
            <div key={party._id}>
              party={party.name} <br />
              partyType={partyType} <br />
              {party.characters.length > 0 &&
                party.characters.map(c => <div key={c._id}>{c.name}</div>)}
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
