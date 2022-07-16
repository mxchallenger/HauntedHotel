import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/reservations.module.css';
import RoomTypesForm from '../roomttypes/RoomTypesForm';
import validateForm from '../../utils/Validation/ValidateForm';
import { createNewRoom } from '../../utils/services/RoomPageService';

/**
 * @name CreateRoomPage
 * @description Allows entry/validation/post of product
 * @return component
 */
const CreateRoomPage = () => {
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    rate: '',
    active: false
  });

  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setRoomData({ ...roomData, [e.target.id]: e.target.value });
  };

  const [checked, setChecked] = React.useState(false);
  const isActive = checked;
  const handleCheck = () => {
    setChecked(!checked);
  };

  const history = useNavigate();

  const roomObj = () => {
    const newRoom = {
      name: roomData.name,
      description: roomData.description,
      rate: roomData.rate,
      active: isActive
    };
    createNewRoom(newRoom).then(() => history.push('/room-types'));
  };

  const createRoom = (e) => {
    e.preventDefault();
    validateForm(roomData, setErrors, roomObj);
  };
  return (
    <div className={styles.inputs}>
      <div className={styles.forms}>
        <h3 className={styles.title}>Create New Room</h3>
        <RoomTypesForm
          onChange={onChange}
          roomData={roomData}
          errors={errors}
          defaultValue=""
        />
        <div>Active Room?</div>
        <div className={styles.inputbox}>
          <input
            type="checkbox"
            id="active"
            onChange={handleCheck}
            value={checked}
            defaultValue="false"
          />
        </div>
        <div className={styles.ReserveNow}>
          <button onClick={createRoom} type="submit" className={styles.button}>
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomPage;
