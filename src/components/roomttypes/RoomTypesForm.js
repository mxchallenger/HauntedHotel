import React from 'react';
import FormItem from '../form/FormItem';
import s from '../../styles/roomtypes.module.css';

/**
 * @name RoomTypesForm
 * @description Allows entry of Guest Details
 * @return component
 */
const RoomTypesForm = ({
  rooms, onChange, errors
}) => (
  <div className={s.inputs}>
    <FormItem
      type="text"
      id="name"
      label="Room Type Name"
      onChange={onChange}
      value={rooms}
      errors={errors}
      className={(errors.name ? s.errorBorder : s.input)}

    />
    {errors && <p className={s.errorMessage}>{errors.name}</p>}

    <FormItem
      type="textarea"
      id="description"
      label="Room Description"
      onChange={onChange}
      value={rooms}
      errors={errors}
      className={(errors.description ? s.errorBorder : s.input)}

    />
    {errors && <p className={s.errorMessage}>{errors.description}</p>}

    <FormItem
      type="number"
      id="rate"
      label="Daily Rate"
      onChange={onChange}
      value={rooms}
      errors={errors}
      className={(errors.rate ? s.errorBorder : s.input)}

    />
    {errors && <p className={s.errorMessage}>{errors.rate}</p>}
  </div>
);
export default RoomTypesForm;
