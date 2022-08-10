import React from 'react';
import Input from './Input';

export default function StatInput({ register, name, label, className, ...rest }) {
  const modifierTag = '_mod';
  const modifierLabel = 'Mod';
  const inputClassName = 'col-6';
  return (
    <React.Fragment>
      <div className={className}>
        <Input name={name} label={label} register={register} className={inputClassName} {...rest} />
        <Input
          name={name + modifierTag}
          label={modifierLabel}
          register={register}
          className={inputClassName}
          {...rest}
        />
      </div>
    </React.Fragment>
  );
}
