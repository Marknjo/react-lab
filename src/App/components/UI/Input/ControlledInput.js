import React from 'react';
import styles from './ControlledInput.module.css';

const Input = function ({ label, input, className, required }) {
  return (
    <div className={`${styles.input} ${className ? className : ''}`}>
      <label htmlFor={input.id}>
        <span>{label}</span>

        {required && <span className={styles['input__required']}>*</span>}
      </label>
      <input {...input} />
    </div>
  );
};

export default Input;
