import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../styles/createEdit.module.css';
import RoomTypesForm from '../roomtypes/RoomTypesForm';
import validateForm from '../../utils/Validation/ValidateForm';
import { editRoomsById, fetchRoomById, deleteRoomById } from '../../utils/services/RoomPageService';
import ConfirmDeleteToast from '../CustomDeleteToast';

/**
 * @name RoomTypeEditPage
 * @description Allows entry/validation/post of product
 * @return component
 */
function RoomTypeEditPage() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState({
    name: '',
    description: '',
    rate: '',
    image_url: '',
    active: false
  });

  useEffect(() => {
    const getRoom = async () => {
      try {
        const room = await fetchRoomById(Number(id));
        setRoomData(room);
      } catch (error) {
        console.error('Error fetching room:', error);
      }
    };
    getRoom();
  }, [id]);

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setRoomData({ ...roomData, [e.target.id]: e.target.value });
  };

  const handleCheck = () => {
    setRoomData({ ...roomData, active: !roomData.active });
  };

  const navigate = useNavigate();

  const roomObj = () => {
    const newRoom = {
      id: roomData.id,
      name: roomData.name,
      description: roomData.description,
      rate: roomData.rate,
      image_url: roomData.image_url,
      active: roomData.active
    };
    editRoomsById(newRoom, { id }).then(() => navigate('/room-types'));
  };

  const editRoom = (e) => {
    e.preventDefault();
    validateForm(roomData, setErrors, roomObj);
  };

  const deleteRoom = () => {
    const showToast = () => {
      const toastId = toast(
        <ConfirmDeleteToast
          onConfirm={() => {
            toast.dismiss(toastId);
            deleteRoomById(Number(id)).then(() => {
              navigate('/room-types');
            });
          }}
          onCancel={() => toast.dismiss(toastId)}
        />,
        {
          autoClose: true,
          closeOnClick: true,
          draggable: false
        }
      );
    };

    showToast();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3 className={styles.title}>Edit/Delete Room</h3>
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
          <button onClick={editRoom} type="submit" className={styles.button}>
            UPDATE
          </button>
          <button onClick={deleteRoom} type="submit" className={styles.button}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomTypeEditPage;
