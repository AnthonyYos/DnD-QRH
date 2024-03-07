import React from 'react';

export default function CharacterHeader({
  name,
  health,
  armorClass,
  meta,
  speed,
  saving_throws,
  skills,
  senses,
  languages,
}) {
  return (
    <React.Fragment>
      <h5 className='card-title text-center'>{name}</h5>
      <div className='row mb-2'>
        <div className='col-md-6'>
          <strong>Health: </strong>
          {health}
          <br />
          <strong>Armor Class: </strong>
          {armorClass}
        </div>
        <div className='col-md-6'>
          <strong>Meta: </strong>
          {meta}
          <br />
          <strong>Speed: </strong>
          {speed}
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <strong>Saving Throws: </strong>
          {saving_throws}
          <br />
          <strong>Skills: </strong>
          {skills}
          <br />
          <strong>Senses: </strong>
          {senses}
          <br />
          <strong>Languages: </strong>
          {languages}
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}
