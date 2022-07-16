import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/reservations.module.css';
import ReservationForm from '../reservations/ReservationForm';
import FormItemDropdown from '../form/FormItemDropdown';
import validateForm from '../../utils/Validation/ValidateForm';
import { addReservation } from '../../utils/services/ReservationsPageService';

/**
 * @name CreateReservationPage
 * @description Allows entry/validation/post of reservation
 * @return component
 */
const CreateReservationPage = () => {
  // roomNames[reservations.roomtypeId]
  const [resData, setResData] = useState({
    user: 'user@catalyte.io',
    guestEmail: '',
    roomTypeId: '',
    checkInDate: '',
    numberOfNights: ''
  });
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setResData({ ...resData, [e.target.id]: e.target.value });
  };

  const history = useNavigate();

  const dropOptions = [1, 2, 3, 4, 5, 6, 7];

  const resObj = () => {
    const newReservation = {
      user: 'user@catalyte.io',
      guestEmail: resData.guestEmail,
      roomTypeId: resData.roomTypeId,
      checkInDate: resData.checkInDate,
      numberOfNights: resData.numberOfNights
    };
    addReservation(newReservation).then(() => history.push('/reservations'));
  };

  const createReservation = (e) => {
    e.preventDefault();
    validateForm(resData, setErrors, resObj);
  };

  return (
    <div className={styles.productContainer}>
      <div className={`${styles.step} ${styles.product}`}>
        <h3 className={styles.title}>Create New Reservation</h3>
        <ReservationForm
          onChange={onChange}
          resData={resData}
          errors={errors}
          defaultValue=""
        />
        <FormItemDropdown
          id="roomTypeId"
          label="Room Types"
          onChange={onChange}
          defaultValue="Select Room Type"
          options={dropOptions}
        />
      </div>
      <div className={styles.buttonArea}>
        <button onClick={createReservation} type="button" className={styles.button}>CREATE</button>
      </div>
    </div>
  );
};

export default CreateReservationPage;
