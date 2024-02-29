import React from 'react';

export default function CharacterHeader({ name, health, armorClass, alignment, meta, speed }) {
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
          <strong>Alignment: </strong>
          {alignment}
          <br />
          <strong>Speed: </strong>
          {speed}
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <strong>Meta: </strong>
          {meta}
        </div>
      </div>

      <hr />
    </React.Fragment>
  );
}
