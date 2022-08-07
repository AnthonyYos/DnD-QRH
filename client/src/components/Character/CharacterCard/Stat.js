import React from 'react';

export default function Stat({ label, statValue, modifier }) {
  return (
    <React.Fragment>
      <strong>{label}: </strong>
      {statValue}&ensp;{modifier}
    </React.Fragment>
  );
}
