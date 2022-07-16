import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import s from '../../styles/reservations.module.css';
import FormItem from '../form/FormItem';
import validateForm from '../../utils/Validation/ValidateForm';
import { editReservationById, getReservationById } from '../../utils/services/ReservationsPageService';
import RoomTypeDropdown from '../reservations/RoomTypeDropdown';

/**
 * @name UpdateReservationPage
 * @description Allows entry/validation/PUT of reservation
 * @return component
 */
const UpdateReservationPage = () => {
  const { id } = useParams();
  const [resData, setResData] = useState({
    user: 'user@catalyte.io',
    guestEmail: '',
    roomTypeId: '',
    checkInDate: '',
    numberOfNights: ''
  });

  useEffect(() => {
    getReservationById(Number(id), setResData);
  }, [id]);

  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setResData({ ...resData, [e.target.id]: e.target.value });
  };

  const history = useNavigate();

  const resObj = () => {
    const newReservation = {
      id,
      user: 'user@catalyte.io',
      guestEmail: resData.guestEmail,
      roomTypeId: resData.roomTypeId,
      checkInDate: resData.checkInDate,
      numberOfNights: resData.numberOfNights
    };
    editReservationById(newReservation, { id }).then(() => history.push('/reservations'));
  };

  const createReservation = (e) => {
    e.preventDefault();
    validateForm(resData, setErrors, resObj);
  };

  return (
    <div className={s.productContainer}>
      <div className={`${s.step} ${s.product}`}>
        <h3 className={s.title}>Update Reservation</h3>
        <FormItem
          value={resData.guestEmail}
          type="email"
          id="guestEmail"
          label="Guest Email"
          onChange={onChange}
          errors={errors}
          className={(errors.guestEmail ? s.errorBorder : s.input)}
        />
        {errors && <p className={s.errorMessage}>{errors.guestEmail}</p>}

        <FormItem
          value={resData.checkInDate}
          type="text"
          id="checkInDate"
          label="Check-in Date"
          onChange={onChange}
          errors={errors}
          className={(errors.checkInDate ? s.errorBorder : s.input)}
        />
        {errors && <p className={s.errorMessage}>{errors.checkInDate}</p>}

        <FormItem
          value={resData.numberOfNights}
          type="number"
          id="numberOfNights"
          label="Number of Nights"
          onChange={onChange}
          errors={errors}
          className={(errors.numberOfNights ? s.errorBorder : s.input)}
        />
        {errors && <p className={s.errorMessage}>{errors.numberOfNights}</p>}
      </div>
      <div className={s.checkbox}>
        <RoomTypeDropdown
          onChange={onChange}
          id="roomTypeId"
          value={resData.roomTypeId}
        />
      </div>
      <div className={s.buttonArea}>
        <button onClick={createReservation} type="button" className={s.button}>CREATE</button>
      </div>
    </div>
  );
};

export default UpdateReservationPage;
