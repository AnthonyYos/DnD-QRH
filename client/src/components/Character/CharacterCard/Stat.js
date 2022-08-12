import React from 'react';

export default function Stat({ label, statValue, modifier }) {
  const modifierSign = modifier >= 0 ? '+' : '-';
  return (
    <React.Fragment>
      <strong>{label}: </strong>
      {statValue}&ensp;{modifierSign + Math.abs(modifier)}
    </React.Fragment>
  );
}
