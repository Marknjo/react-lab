import styles from './FormInput.module.css';

const FormInput = function ({ inputDesc }) {
  return (
    <div className={styles['form-control__group']}>
      <label htmlFor={inputDesc.id}>{inputDesc.label}</label>
      <input name={inputDesc.name} type={inputDesc.type} id={inputDesc.id} />
    </div>
  );
};

export default FormInput;
