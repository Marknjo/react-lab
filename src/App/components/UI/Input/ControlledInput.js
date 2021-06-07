import React from 'react';
import styles from './ControlledInput.module.css';

const Input = function ({ label, input }) {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
