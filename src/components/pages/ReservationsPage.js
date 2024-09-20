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
function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [roomTypes, setRoomTypes] = useState([]);

  const updateRes = () => fetchReservations(setReservations, setApiError);

  useEffect(() => {
    const fetchAndSetRooms = async () => {
      try {
        const rooms = await fetchRooms();
        console.log('Fetched rooms:', rooms);
        setRoomTypes(rooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
        setApiError(true);
      }
    };

    const fetchAndSetReservations = async () => {
      try {
        const res = await fetchReservations();
        console.log('Fetched reservations:', res);
        setReservations(res);
      } catch (error) {
        console.error('Error fetching reservations:', error);
        setApiError(true);
      }
    };

    fetchAndSetRooms();
    fetchAndSetReservations();
  }, []);

  // console.log('Reservations:', reservations); // Debug: Log reservations

  /**
   * @function getRoomInfo
   * @param {*} res
   * @returns multiplies the room rate by number of nights and displays a total cost
   */
  const getRoomInfo = (res) => {
    if (!Array.isArray(roomTypes)) {
      console.error('roomTypes is not an array:', roomTypes); // Debug: Log roomTypes if it's not an array
      return { roomName: 'Unknown', totalRate: 'N/A' };
    }

    const room = roomTypes.find((r) => r.id === res.room_type_id);
    if (!room) {
      return { roomName: 'Unknown', totalRate: 'N/A' };
    }
    const roomName = room.name;
    const totalRate = (room.rate * res.number_of_nights).toFixed(2);
    return { totalRate, roomName };
  };

  return (
    <div className={s.reservationsTable}>
      {apiError && <p className={s.errMsg} data-testid="errMsg">{c.API_ERROR}</p>}
      <NavLink to={`${c.CREATE_RES}`}>
        <button className={s.createButton} type="button">CREATE NEW RESERVATION</button>
      </NavLink>
      <h3 className={s.titleText}>Reservations</h3>
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
        <tbody>
          {reservations.sort((resA, resB) => resA.id - resB.id)
            .map((res) => (
              <ReservationData
                key={res.id}
                updateRes={updateRes}
                reservation={res}
                roomInfo={getRoomInfo(res)}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsPage;
