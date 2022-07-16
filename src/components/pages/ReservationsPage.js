import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../styles/reservations.module.css';
import { fetchReservations } from '../../utils/services/ReservationsPageService';
import c from '../../utils/constants';
import ReservationData from '../reservations/ReservationData';
import { fetchRooms } from '../../utils/services/RoomPageService';

/**
 * @Component ReservationsPage
 * @returns the main reservation landing page, create, update and delete functions
 * and a view of all existing reservations.
 */
const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [roomType, setRoomType] = useState([]);

  const updateRes = () => fetchReservations(setReservations, setApiError);

  useEffect(() => {
    fetchReservations(setReservations, setApiError);
    fetchRooms(setRoomType);
  }, []);
  /**
   * @function getRoomRate
   * @param {*} res
   * @returns multiplies the room rate by number of nights and displays a total cost
   */
  const getRoomRate = (res) => {
    const r = roomType.find((room) => (room.id === res.roomTypeId));
    if (r === undefined) {
      return undefined;
    }
    const totalRate = (((r.rate) * (res.numberOfNights)).toFixed(2));
    return totalRate;
  };
  /**
   *@function getName
   * @param {*} res
   * @returns gets the corresponding name of the room type (not currently working)
   */
  const getName = (res) => {
    const o = roomType.find((object) => (object.id === res.roomTypeId));
    if (o === undefined) {
      return undefined;
    }
    const roomName = (o.name);
    return roomName;
  };

  return (
    <div className={s.reservationsTable}>
      {apiError && <p className={s.errMsg} data-testid="errMsg">{c.API_ERROR}</p>}
      <NavLink to={`${c.CREATE_RES}`}>
        <button className={s.button} type="button">CREATE</button>
      </NavLink>
      <h3>Reservations</h3>
      <table>
        <thead>
          <tr>
            <th>Options</th>
            <th>Reservation ID</th>
            <th>Guest Email</th>
            <th>Room Type Name</th>
            <th>Check-in Date</th>
            <th>Number of Nights</th>
            <th>Total Cost</th>
          </tr>
        </thead>

        {reservations.sort((resA, resB) => resA.id - resB.id)
          .map((res) => (
            <ReservationData
              key={res.id}
              updateRes={updateRes}
              reservation={res}
              roomRate={getRoomRate(res)}
              roomName={getName(res)}
            />
          ))}
      </table>
    </div>
  );
};

export default ReservationsPage;
