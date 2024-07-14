import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field component
 * @return component
 */
function FormItem({
  onChange, value, id, label, placeholder, type, className
}) {
  return (
    <div className={styles.formItem}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={`${className} ${styles.textarea}`}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          rows="4"
          cols="50"
        />
      ) : (
        <input
          className={`${className} ${styles.input}`}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
    </div>
  );
}

export default FormItem;
