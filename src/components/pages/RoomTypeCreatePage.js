import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/createEdit.module.css';
import RoomTypesForm from '../roomtypes/RoomTypesForm';
import validateForm from '../../utils/Validation/ValidateForm';
import { createNewRoom } from '../../utils/services/RoomPageService';

/**
 * @name CreateRoomPage
 * @description Allows entry/validation/post of product
 * @return component
 */
function CreateRoomPage() {
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    rate: '',
    image_url: '',
    active: false
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setRoomData({ ...roomData, [e.target.id]: e.target.value });
  };

  const handleCheck = () => {
    setRoomData({ ...roomData, active: !roomData.active });
  };

  const roomObj = async () => {
    const newRoom = {
      name: roomData.name,
      description: roomData.description,
      rate: roomData.rate,
      image_url: roomData.image_url,
      active: roomData.active
    };
    createNewRoom(newRoom).then(() => navigate('/room-types'));
  };

  const createRoom = (e) => {
    console.log('button clicked');
    e.preventDefault();
    validateForm(roomData, setErrors, roomObj);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3 className={styles.title}>Create New Room</h3>
        <RoomTypesForm
          onChange={onChange}
          rooms={roomData}
          errors={errors}
        />
        <div className={styles.formItem}>
          <div className={styles.label}>Active Room?</div>
          <div className={styles.inputbox}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="active"
              onChange={handleCheck}
              checked={roomData.active}
            />
          </div>
        </div>
        <div className={styles.ReserveNow}>
          <button onClick={createRoom} type="submit" className={styles.button}>
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRoomPage;
