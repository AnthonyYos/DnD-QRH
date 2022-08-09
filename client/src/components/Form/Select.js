import React from 'react';

export default function Select({ register, name, label, options, className, ...rest }) {
  return (
    <React.Fragment>
      <div className={className}>
        <label htmlFor={name}>{label}&ensp;</label>
        <select {...register(name)} {...rest}>
          {options.map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

<option value='Lawful Good'>Lawful Good</option>;
