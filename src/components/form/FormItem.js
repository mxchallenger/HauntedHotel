import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItem = ({
  onChange, value, id, label, placeholder, type, className, defaultValue
}) => (
  <div key={id}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
    <input
      className={className}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      defaultValue={defaultValue}
    />
  </div>
);

export default FormItem;
