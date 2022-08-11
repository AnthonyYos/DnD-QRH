import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ formData, children, onSubmit }) {
  const { stats, ...data } = formData; // eventually destructure out modifiers object and spread it into defaultValues
  const defaultValues = { ...data, ...stats, cha_mod: 5 };
  console.log(defaultValues);
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
              ...{
                ...child.props,
                register,
                key: child.props.name,
                errors,
                className: 'row m-3',
                required: 'required',
              },
            })
          : child;
      })}
    </form>
  );
}
