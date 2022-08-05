import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetails({ resourceType }) {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/v1/${resourceType}/${id}`);
      setCharacter(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div>Character Type: {resourceType}</div>
      <div>ID: {id}</div>
      {character && <h1>{character.name}</h1>}
    </React.Fragment>
  );
}
