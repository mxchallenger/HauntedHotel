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
          <td>{res.guest_email}</td>
          <td>{res.roomTypeId}</td>
          <td>{res.check_in_date}</td>
          <td>{res.number_of_nights}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
