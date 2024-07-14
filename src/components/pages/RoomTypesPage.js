import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import s from '../../styles/roomtypes.module.css';
import c from '../../utils/constants';
import { fetchRooms } from '../../utils/services/RoomPageService';
import RoomCard from '../roomtypes/RoomCard';

/**
 * @name RoomTypesPage
 * @description fetches products from API and displays rooms as cards with edit buttons
 * @return component
 */
function RoomTypesPage() {
  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rooms = await fetchRooms();
      setRoomTypes(rooms);
    };

    fetchData();
  }, []);

  return (
    <div className={s.oContainer}>
      <NavLink to={`${c.CREATE_ROOM}`}>
        <button className={s.createButton} type="button">CREATE NEW ROOM</button>
      </NavLink>
      <div className={s.iContainer}>
        <Box>
          <div className={s.app}>
            {roomTypes.length > 0 ? (
              roomTypes.map((roomType) => (
                <div key={roomType.id}>
                  <RoomCard roomType={roomType} />
                </div>
              ))
            ) : (
              <p>No room types available</p>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default RoomTypesPage;
