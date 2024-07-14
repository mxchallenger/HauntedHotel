import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../styles/createEdit.module.css';
import ReservationForm from '../reservations/ReservationForm';
import FormItemDropdown from '../form/FormItemDropdown';
// import validateForm from '../../utils/Validation/ValidateForm';
import { editReservationById, getReservationById } from '../../utils/services/ReservationsPageService';
import { fetchRooms } from '../../utils/services/RoomPageService';

/**
 * @name EditReservationPage
 * @description Allows entry/validation/PUT of reservation
 * @return component
 */
function EditReservationPage() {
  const { id } = useParams();
  const [resData, setResData] = useState({
    user: 'user@catalyte.io',
    guest_email: '',
    room_type_id: '',
    check_in_date: '',
    number_of_nights: ''
  });
  const [errors, setErrors] = useState({});
  const [roomOptions, setRoomOptions] = useState([]);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rooms = await fetchRooms();
        // Moved the definition of options inside the then() block after rooms are set
        const options = rooms.map((room) => ({
          value: room.id,
          label: room.name
        }));
        console.log(options);
        setRoomOptions(options);
        const reservation = await getReservationById(Number(id));
        setResData((prevData) => ({
          ...prevData,
          guest_email: reservation.guest_email || '',
          room_type_id: reservation.room_type_id || '',
          check_in_date: reservation.check_in_date || '',
          number_of_nights: reservation.number_of_nights || ''
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
        setApiError(true);
      }
    };
    fetchData();
  }, [id]);

  const onChange = (e) => {
    setResData({ ...resData, [e.target.id]: e.target.value });
  };

  const validateFormWithErrors = (data, setErrorsCallback, callback) => {
    const datePattern = /^(\d{2})([-]{1})(\d{2})([-]{1})(\d{4})$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validationErrors = {};

    // Validate check_in_date
    if (!datePattern.test(data.check_in_date)) {
      validationErrors.check_in_date = 'Invalid date format. Use MM-DD-YYYY.';
    }

    // Validate guest_email
    if (!emailPattern.test(data.guest_email)) {
      validationErrors.guest_email = 'Invalid email format.';
    }

    // Add other validations as needed

    if (Object.keys(validationErrors).length === 0) {
      callback();
    } else {
      setErrorsCallback(validationErrors);
    }
  };

  const resObj = () => {
    const updatedReservation = {
      id,
      // user: 'user@catalyte.io',
      guest_email: resData.guest_email,
      room_type_id: resData.room_type_id,
      check_in_date: resData.check_in_date,
      number_of_nights: resData.number_of_nights
    };
    editReservationById(updatedReservation)
      .then(() => {
        toast.success('Reservation updated successfully');
        navigate('/reservations');
      })
      .catch((error) => {
        toast.error('Server error. Your updates have not been saved.');
        console.error('Error updating reservation:', error);
      });
  };

  const editReservation = (e) => {
    e.preventDefault();
    validateFormWithErrors(resData, setErrors, resObj);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3 className={styles.title}>Edit Reservation</h3>
        {apiError && <p className={styles.error}>Error fetching data.</p>}
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
          value={resData.room_type_id}
          options={roomOptions}
        />
      </div>
      <div className={styles.buttonArea}>
        <button onClick={editReservation} type="button" className={styles.button}>UPDATE</button>
      </div>
    </div>
  );
}

export default EditReservationPage;
