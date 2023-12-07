import React from 'react';
import styles from './textInput.module.css';

const TextInput = ({
  labelName,
  input,
  children,
  nameSelect,
  inputType,
  refrerence,
  placeholderText,
  error
}) => {
  return (
    <div>
      <label className={styles.label}>{labelName}</label>
      {input ? (
        <input
          className={`${error ? `${styles.input} ${styles.errorBorder}` : styles.input}`}
          ref={refrerence}
          placeholder={placeholderText}
          type={inputType}
        />
      ) : (
        <>
          <select
            name={nameSelect}
            className={`${error ? `${styles.select} ${styles.errorBorder}` : styles.select}`}
            ref={refrerence}
          >
            {children}
          </select>
        </>
      )}
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default TextInput;
