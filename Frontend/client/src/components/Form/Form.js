import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ formData, children, onSubmit }) {
  // const { stats, modifiers, ...data } = formData || {};
  const defaultValues = { ...formData };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  console.log(formData);
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
