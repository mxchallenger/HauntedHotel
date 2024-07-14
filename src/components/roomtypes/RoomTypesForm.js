import React from 'react';
import FormItem from '../form/FormItem';
import s from '../../styles/roomtypes.module.css';

/**
 * @name RoomTypesForm
 * @description Allows entry of Guest Details
 * @return component
 */
function RoomTypesForm({
  rooms, onChange, errors
}) {
  return (
    <div className={s.inputs}>
      <FormItem
        type="text"
        id="name"
        label="Room Type Name"
        onChange={onChange}
        value={rooms.name}
        defaultValue={rooms.name}
        errors={errors}
        className={(errors.name ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.name}</p>}

      <FormItem
        type="textarea"
        id="description"
        label="Room Description"
        onChange={onChange}
        value={rooms.description}
        defaultValue={rooms.description}
        errors={errors}
        className={(errors.description ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.description}</p>}

      <FormItem
        type="number"
        id="rate"
        label="Daily Rate"
        onChange={onChange}
        value={rooms.rate}
        defaultValue={rooms.rate}
        errors={errors}
        className={(errors.rate ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.rate}</p>}

      <FormItem
        type="text"
        id="image_url"
        label="Image URL"
        onChange={onChange}
        value={rooms.image_url}
        defaultValue={rooms.image_url}
        errors={errors}
        className={(errors.image_url ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.image_url}</p>}
    </div>
  );
}
export default RoomTypesForm;
