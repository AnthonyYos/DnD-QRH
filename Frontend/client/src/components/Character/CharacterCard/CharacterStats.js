import React from 'react';
import Stat from './Stat';

export default function CharacterStats({ stats, className }) {
  return (
    <React.Fragment>
      <div className={className}>
        <Stat label='Str' statValue={stats.str} modifier={stats.str_mod} />
        <br />
        <Stat label='Dex' statValue={stats.dex} modifier={stats.dex_mod} />
        <br />
        <Stat label='Con' statValue={stats.con} modifier={stats.con_mod} />
        <br />
      </div>
      <div className={className}>
        <Stat label='Int' statValue={stats.int} modifier={stats.int_mod} />
        <br />
        <Stat label='Wis' statValue={stats.wis} modifier={stats.wis_mod} />
        <br />
        <Stat label='Cha' statValue={stats.cha} modifier={stats.cha_mod} />
        <br />
      </div>
    </React.Fragment>
  );
}
