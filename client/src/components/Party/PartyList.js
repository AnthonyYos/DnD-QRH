import React from 'react';

import useFetch from '../../hooks/useFetch';

export const PartyList = ({ resourceType }) => {
  const {
    data: parties,
    isPending,
    error,
    setData: setParties,
  } = useFetch(`/api/v1/${resourceType}/party`);

  return (
    <section className='row m-3'>
      {parties && <div>{parties}</div>}
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
  );
};
