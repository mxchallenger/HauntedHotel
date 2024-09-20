import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/createEdit.module.css';
import ReservationForm from '../reservations/ReservationForm';
import FormItemDropdown from '../form/FormItemDropdown';
import validateForm from '../../utils/Validation/ValidateForm';
import { addReservation } from '../../utils/services/ReservationsPageService';
import { fetchRooms } from '../../utils/services/RoomPageService';

/**
 * @name CreateReservationPage
 * @description Allows entry/validation/post of reservation
 * @return component
 */
function CreateReservationPage() {
  const [resData, setResData] = useState({
    // user: 'user@catalyte.io',
    guest_email: '',
    roomTypeId: '',
    check_in_date: '',
    number_of_nights: ''
  });
  const [errors, setErrors] = useState({});
  const [roomOptions, setRoomOptions] = useState([]);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetRooms = async () => {
      try {
        const rooms = await fetchRooms();
        console.log('Fetched rooms:', rooms); // Debug: Log fetched rooms
        const options = rooms.map((room) => ({ value: room.id, label: room.name }));
        console.log('Dropdown options:', options); // Debug: Log dropdown options
        setRoomOptions(options);
      } catch (error) {
        console.error('Error fetching rooms:', error); // Debug: Log any errors
        setApiError(true);
      }
    };
    fetchAndSetRooms();
  }, []);

  const onChange = (e) => {
    setResData({ ...resData, [e.target.id]: e.target.value });
  };

  const resObj = () => {
    const newReservation = {
      // user: 'user@catalyte.io',
      guest_email: resData.guest_email,
      room_type_id: resData.roomTypeId,
      check_in_date: resData.check_in_date,
      number_of_nights: resData.number_of_nights
    };
    addReservation(newReservation).then(() => navigate('/reservations'));
  };

  const createReservation = (e) => {
    e.preventDefault();
    validateForm(resData, setErrors, resObj);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3 className={styles.title}>Create New Reservation</h3>
        {apiError && <p className={styles.errorMessage}>Error fetching room types.</p>}
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
          value={resData.roomTypeId}
          options={roomOptions}
        />
      </div>
      <div className={styles.buttonArea}>
        <button onClick={createReservation} type="button" className={styles.button}>CREATE</button>
      </div>
    </div>
  );
}

export default CreateReservationPage;
