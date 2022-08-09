import React from 'react';

export default function Button({ className, onClick, type, children }) {
  return (
    <button className={className} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
