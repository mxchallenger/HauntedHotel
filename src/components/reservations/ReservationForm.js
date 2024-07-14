import React from 'react';
import FormItem from '../form/FormItem';
import s from '../../styles/reservations.module.css';

/**
 * @name ReservationForm
 * @description Allows entry of Guest Details
 * @return component
 */
function ReservationForm({
  onChange, resData, errors
}) {
  return (
    <div className={s.inputs}>
      <FormItem
        value={resData.guest_email}
        placeholder="e.g. example@catalyte.io"
        type="email"
        id="guest_email"
        label="Guest Email"
        onChange={onChange}
        errors={errors}
        // className={(errors.guest_email ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.guest_email}</p>}

      <FormItem
        value={resData.check_in_date}
        placeholder="e.g. MM-DD-YYYY"
        type="text"
        id="check_in_date"
        label="Check-in Date"
        onChange={onChange}
        errors={errors}
        // className={(errors.check_in_date ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.check_in_date}</p>}

      <FormItem
        value={resData.number_of_nights}
        type="number"
        id="number_of_nights"
        label="Number of Nights"
        onChange={onChange}
        errors={errors}
        // className={(errors.number_of_nights ? s.errorBorder : s.input)}
      />
      {errors && <p className={s.errorMessage}>{errors.number_of_nights}</p>}
    </div>
  );
}
export default ReservationForm;
