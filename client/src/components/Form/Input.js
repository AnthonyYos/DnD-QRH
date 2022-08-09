import React from 'react';

export default function Input({ register, name, label, className, ...rest }) {
  return (
    <React.Fragment>
      <div className={className}>
        <label htmlFor={name}>{label}&ensp;</label>
        <input id={name} {...register(name)} {...rest} />
      </div>
    </React.Fragment>
  );
}
