import React from 'react';
import Stat from './Stat';

export default function CharacterStats({ stats, className }) {
  return (
    <React.Fragment>
      <p className={className}>
        <Stat label='Str' statValue={stats.str} modifier={'placeholder'} />
        <br />
        <Stat label='Dex' statValue={stats.dex} modifier={'placeholder'} />
        <br />
        <Stat label='Con' statValue={stats.con} modifier={'placeholder'} />
        <br />
      </p>
      <p className={className}>
        <Stat label='Int' statValue={stats.int} modifier={'placeholder'} />
        <br />
        <Stat label='Wis' statValue={stats.wis} modifier={'placeholder'} />
        <br />
        <Stat label='Cha' statValue={stats.cha} modifier={'placeholder'} />
        <br />
      </p>
    </React.Fragment>
  );
}
