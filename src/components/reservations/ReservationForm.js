import React from 'react';
import FormItem from '../form/FormItem';
import s from '../../styles/reservations.module.css';

/**
 * @name ReservationForm
 * @description Allows entry of Guest Details
 * @return component
 */
const ReservationForm = ({
  onChange, errors
}) => (
  <div className={s.inputs}>
    <FormItem
      placeholder="e.g. example@catalyte.io"
      type="email"
      id="guestEmail"
      label="Guest Email"
      onChange={onChange}
      errors={errors}
      className={(errors.guestEmail ? s.errorBorder : s.input)}
    />
    {errors && <p className={s.errorMessage}>{errors.guestEmail}</p>}

    <FormItem
      placeholder="e.g. MM-DD-YYYY"
      type="text"
      id="checkInDate"
      label="Check-in Date"
      onChange={onChange}
      errors={errors}
      className={(errors.checkInDate ? s.errorBorder : s.input)}
    />
    {errors && <p className={s.errorMessage}>{errors.checkInDate}</p>}

    <FormItem
      type="number"
      id="numberOfNights"
      label="Number of Nights"
      onChange={onChange}
      errors={errors}
      className={(errors.numberOfNights ? s.errorBorder : s.input)}
    />
    {errors && <p className={s.errorMessage}>{errors.numberOfNights}</p>}
  </div>
);
export default ReservationForm;
