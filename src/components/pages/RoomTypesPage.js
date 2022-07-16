import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import s from '../../styles/roomtypes.module.css';
import c from '../../utils/constants';
import { fetchRooms } from '../../utils/services/RoomPageService';
import RoomCard from '../roomttypes/RoomCard';
// import { fetchRooms } from '../../utils/services/RoomPageService';
/**
 * @name RoomTypesPage
 * @description fetches products from API and displays rooms as cards with edit buttons
 * @return component
 */
const RoomTypesPage = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchRooms(setRoomTypes, setApiError);
  }, []);
  // if you don't add a key to the div  in the map, you'll get a react child key error
  return (
    <div className={s.oContainer}>
      <NavLink to={`${c.CREATE_ROOM}`}>
        <button className={s.button} type="button">CREATE</button>
      </NavLink>
      <div className={c.iContainer}>
        <Box>
          {apiError && <p className={s.errMsg} data-testid="errMsg">{c.API_ERROR}</p>}
          <div className={s.app}>
            {roomTypes.map((roomType) => (
              <div key={roomType.id}>
                <RoomCard roomType={roomType} />
              </div>
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};
export default RoomTypesPage;
