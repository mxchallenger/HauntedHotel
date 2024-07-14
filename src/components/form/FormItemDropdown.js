import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItemDropdown
 * @description Dropdown component for form items
 * @return component
 */
function FormItemDropdown({
  onChange, value, defaultValue, id, label, options, className
}) {
  return (
    <div className={styles.formItem}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div>
        <select
          className={`${className} ${styles.select}`}
          id={id}
          onBlur={onChange}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
        >
          <option value="">
            Select
            {' '}
            {label}
          </option>
          {options.map((option) => (
            <option
              value={option.value}
              key={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FormItemDropdown;
