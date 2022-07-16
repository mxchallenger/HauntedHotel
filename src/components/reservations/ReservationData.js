import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../styles/reservations.module.css';
import { deleteReservationById } from '../../utils/services/ReservationsPageService';
/**
 * @returns creates the data for the table and edit and create buttons.
 */
const ReservationData = ({ reservation, roomRate, updateRes }) => {
  const onClick = () => {
    deleteReservationById(reservation.id, updateRes);
  };
  return (
    <tbody>
      <tr>
        <td>
          <NavLink to={`/reservations/edit/${reservation.id}`}>
            <button className={s.button} type="button">EDIT</button>
          </NavLink>
          <button className={s.button} type="button" onClick={onClick}>DELETE</button>
        </td>
        <td>{reservation.id}</td>
        <td>{reservation.guestEmail}</td>
        <td>{reservation.roomTypeId}</td>
        <td>{reservation.checkInDate}</td>
        <td>{reservation.numberOfNights}</td>
        <td>{`$${roomRate}`}</td>
      </tr>
    </tbody>
  );
};
export default ReservationData;
