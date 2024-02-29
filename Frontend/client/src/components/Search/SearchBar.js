import React from 'react';
import SearchInput from './SearchInput';
import SearchSelect from './SearchSelect';

export default function SearchBar({
  selectOptions,
  selectFilterHandler,
  searchFilter,
  searchTermValue,
  searchTermHandler,
}) {
  return (
    <React.Fragment>
      <SearchSelect
        name='filter'
        label='Filter'
        className='m-2'
        options={selectOptions}
        onChange={selectFilterHandler}
      />
      <SearchInput
        name='search'
        type='text'
        label='Search'
        placeholder={`Search by ${searchFilter}...`}
        value={searchTermValue}
        className='m-2'
        onChange={searchTermHandler}
      />
    </React.Fragment>
  );
}
