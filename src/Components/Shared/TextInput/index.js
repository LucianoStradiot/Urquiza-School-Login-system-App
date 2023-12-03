import React from 'react';
import styles from './textInput.module.css';

const TextInput = ({ labelName, inputName, refrerence, placeholderText, error }) => {
  return (
    <div>
      <label className={styles.label}>{labelName}</label>
      <input
        className={`${error ? `${styles.input} ${styles.errorBorder}` : styles.input}`}
        name={inputName}
        ref={refrerence}
        placeholder={placeholderText}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default TextInput;
