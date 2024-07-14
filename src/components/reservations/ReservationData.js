import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from '../../styles/reservations.module.css';
import { deleteReservationById } from '../../utils/services/ReservationsPageService';
import ConfirmDeleteToast from '../CustomDeleteToast';

/**
 * @returns creates the data for the table and edit and create buttons.
 */
function ReservationData({ reservation, roomInfo, updateRes }) {
  const deleteRes = () => {
    const showToast = () => {
      const toastId = toast(
        <ConfirmDeleteToast
          onConfirm={() => {
            toast.dismiss(toastId);
            deleteReservationById(Number(reservation.id), updateRes).then(() => {
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
    <tr>
      <td>
        <NavLink to={`/reservations/edit/${reservation.id}`}>
          <button className={s.button} type="button">EDIT</button>
        </NavLink>
        <button className={s.button} type="button" onClick={deleteRes}>DELETE</button>
      </td>
      <td>{reservation.id}</td>
      <td>{reservation.guest_email}</td>
      <td>{roomInfo.roomName}</td>
      <td>{reservation.check_in_date}</td>
      <td>{reservation.number_of_nights}</td>
      <td>{`$${roomInfo.totalRate}`}</td>
    </tr>
  );
}

export default ReservationData;
