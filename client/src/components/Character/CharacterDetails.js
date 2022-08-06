import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export default function CharacterDetails({ resourceType }) {
  const { id } = useParams();
  const {
    data: character,
    isPending,
    error,
    setData: setCharacter,
  } = useFetch(`/api/v1/${resourceType}/${id}`);

  return (
    <React.Fragment>
      {character && <h1>{character.name}</h1>}
      {character && <div>Character Type: {resourceType}</div>}
      {character && <div>ID: {id}</div>}
    </React.Fragment>
  );
}
