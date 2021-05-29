import styles from './FormInput.module.css';

const FormInput = function ({ inputDesc, value, onGetInputValue }) {
  const handleInputChange = event => {
    onGetInputValue(event.target.value);
  };

  return (
    <div className={styles['form-control__group']}>
      <label htmlFor={inputDesc.id}>{inputDesc.label}</label>
      <input
        onChange={handleInputChange}
        value={value}
        name={inputDesc.name}
        type={inputDesc.type}
        id={inputDesc.id}
      />
    </div>
  );
};

export default FormInput;
