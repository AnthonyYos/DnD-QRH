import React from 'react';
import Stat from './Stat';

export default function CharacterStats({ stats, modifiers, className }) {
  return (
    <React.Fragment>
      <div className={className}>
        <Stat label='Str' statValue={stats.str} modifier={modifiers.str_mod} />
        <br />
        <Stat label='Dex' statValue={stats.dex} modifier={modifiers.dex_mod} />
        <br />
        <Stat label='Con' statValue={stats.con} modifier={modifiers.con_mod} />
        <br />
      </div>
      <div className={className}>
        <Stat label='Int' statValue={stats.int} modifier={modifiers.int_mod} />
        <br />
        <Stat label='Wis' statValue={stats.wis} modifier={modifiers.wis_mod} />
        <br />
        <Stat label='Cha' statValue={stats.cha} modifier={modifiers.cha_mod} />
        <br />
      </div>
    </React.Fragment>
  );
}
