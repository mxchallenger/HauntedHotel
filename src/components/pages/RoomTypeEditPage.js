import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../styles/reservations.module.css';
import FormItem from '../form/FormItem';
import validateForm from '../../utils/Validation/ValidateForm';
import { editRoomsById, fetchRoomById } from '../../utils/services/RoomPageService';

/**
 * @name RoomTypeEditPage
 * @description Allows entry/validation/post of product
 * @return component
 */
const RoomTypeEditPage = () => {
  const { id } = useParams();
  const [oldRoom, setOldRoom] = useState([]);
  const [roomData, setRoomData] = useState({
    name: oldRoom.name,
    description: oldRoom.name,
    rate: oldRoom.name,
    active: oldRoom.active
  });
  useEffect(() => {
    fetchRoomById(Number(id), setOldRoom);
  }, [id]);

  useEffect(() => {
    fetchRoomById(Number(id), setRoomData);
  }, [id]);

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setRoomData({ ...roomData, [e.target.id]: e.target.value });
  };

  const handleCheck = () => {
    setRoomData({ ...roomData, active: !roomData.active });
  };

  const history = useNavigate();

  const roomObj = () => {
    const newRoom = {
      id: oldRoom.id,
      name: roomData.name,
      description: roomData.description,
      rate: roomData.rate,
      active: roomData.active
    };
    editRoomsById(newRoom, { id }).then(() => history.push('/room-types'));
  };

  const createRoom = (e) => {
    e.preventDefault();
    validateForm(roomData, setErrors, roomObj);
  };
  return (
    <div className={styles.inputs}>
      <div className={styles.forms}>
        <h3 className={styles.title}>Update Room</h3>
        <FormItem
          placeholder={oldRoom.name}
          type="text"
          id="name"
          label="Room Type Name"
          onChange={onChange}
          errors={errors}
          className={(errors.name ? styles.errorBorder : styles.input)}
        />
        {errors && <p className={styles.errorMessage}>{errors.name}</p>}

        <FormItem
          placeholder={oldRoom.description}
          type="textarea"
          id="description"
          label="Room Description"
          onChange={onChange}
          errors={errors}
          className={(errors.description ? styles.errorBorder : styles.input)}
        />
        {errors && <p className={styles.errorMessage}>{errors.description}</p>}

        <FormItem
          placeholder={oldRoom.rate}
          type="number"
          id="rate"
          label="Daily Rate"
          onChange={onChange}
          errors={errors}
          className={(errors.rate ? styles.errorBorder : styles.input)}
        />
        {errors && <p className={styles.errorMessage}>{errors.rate}</p>}
      </div>
      <div>Active Room?</div>
      <div className={styles.inputbox}>
        <input
          type="checkbox"
          id="active"
          label="Active"
          onChange={handleCheck}
          checked={roomData.active}
        />
      </div>
      <div className={styles.ReserveNow}>
        <button onClick={createRoom} type="submit" className={styles.button}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default RoomTypeEditPage;
