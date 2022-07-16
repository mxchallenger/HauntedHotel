import React, { useState, useEffect } from 'react';
import { fetchReservations } from '../../utils/services/ReservationsPageService';
import ResTableHeadings from '../../utils/helpers/ResTableHeadings';

/**
 * @returns creates the table with the data
 */
const TableData = () => {
  const [reservations, getReservations] = useState([]);

  useEffect(() => {
    fetchReservations(getReservations);
  }, []);

  return (
    <tbody>
      <ResTableHeadings />
      {reservations.map((res) => (
        <tr>
          <td key={res.id}>{res.id}</td>
          <td>{res.guestEmail}</td>
          <td>{res.roomTypeId}</td>
          <td>{res.checkInDate}</td>
          <td>{res.numberOfNights}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
