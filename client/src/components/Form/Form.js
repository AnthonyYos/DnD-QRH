import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ defaultValues, children, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{ ...child.props, register, key: child.props.name, errors },
            })
          : child;
      })}
    </form>
  );
}
