import React from 'react';
import styles from './ControlledInput.module.css';

const Input = function ({ label, input, className }) {
  return (
    <div className={`${styles.input} ${className ? className : ''}`}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
