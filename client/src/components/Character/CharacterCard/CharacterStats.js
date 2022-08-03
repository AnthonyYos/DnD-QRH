import React from 'react';

export default function CharacterStats({ stats }) {
  return (
    <div className='row'>
      <p className='col-md-6'>
        <strong>Str: </strong>
        {stats.str}
        <br />
        <strong>Dex: </strong>
        {stats.dex}
        <br />
        <strong>Con: </strong>
        {stats.con}
        <br />
      </p>
      <p className='col-md-6'>
        <strong>Int: </strong>
        {stats.int}
        <br />
        <strong>Wis: </strong>
        {stats.wis}
        <br />
        <strong>Cha: </strong>
        {stats.cha}
        <br />
      </p>
    </div>
  );
}
