import React from 'react';

export default function Select({ register, name, label, options, className, ...rest }) {
  return (
    <React.Fragment>
      <div className={className}>
        <label htmlFor={name}>{label}&ensp;</label>
        <select {...register(name)} {...rest}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}
