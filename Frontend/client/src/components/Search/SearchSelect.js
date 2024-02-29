import React from 'react';

export default function SearchSelect({ name, label, options, className, ...rest }) {
  return (
    <React.Fragment>
      <label htmlFor={name} className={className}>
        {label}
      </label>
      <select id={name} {...rest}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
