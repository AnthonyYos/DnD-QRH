import React from 'react';
import ApiEndpoint from '../../context/ResourceType';
import Input from './Input';

export default function StatInput({ register, name, label, className, characterType, ...rest }) {
  const modifierTag = '_mod';
  const modifierLabel = 'Mod';
  const inputClassName = 'col-6';

  const minStat = 1;
  const maxStat = characterType === ApiEndpoint.PLAYER ? 20 : 30;

  const minModifier = -5;
  const maxModifier = characterType === ApiEndpoint.PLAYER ? 5 : 10;

  return (
    <React.Fragment>
      <div className={className}>
        <Input
          name={name}
          label={label}
          register={register}
          className={inputClassName}
          min={minStat}
          max={maxStat}
          {...rest}
        />
        <Input
          name={name + modifierTag}
          label={modifierLabel}
          register={register}
          className={inputClassName}
          min={minModifier}
          max={maxModifier}
          {...rest}
        />
      </div>
    </React.Fragment>
  );
}
