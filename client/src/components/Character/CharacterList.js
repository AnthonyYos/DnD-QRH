import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import axios from 'axios';

export const CharacterList = ({ resourceType }) => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/v1/${resourceType}`);
      setCharacters(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <section className='row m-3'>
      {characters &&
        characters.length > 0 &&
        characters.map(character => (
          <CharacterCard
            key={character._id}
            character={character}
            resourceType={resourceType}
            characterListState={{ setCharacters, characters }}
          />
        ))}
    </section>
  );
};
