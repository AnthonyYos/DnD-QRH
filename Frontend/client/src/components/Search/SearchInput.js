import React from 'react';

export default function SearchInput({ name, label, className, ...rest }) {
  return (
    <React.Fragment>
      <label htmlFor={name} className={className}>
        {label}:
      </label>
      <input id={name} className={className} {...rest} />
    </React.Fragment>
  );
}
