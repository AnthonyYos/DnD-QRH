import React from 'react';

export default function CharacterHeader({ name, health, armorClass, alignment, race }) {
  return (
    <React.Fragment>
      <h5 className='card-title text-center'>{name}</h5>
      <section className='row card-text'>
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
          <strong>Race: </strong>
          {race}
        </div>
      </section>
      <hr />
    </React.Fragment>
  );
}
