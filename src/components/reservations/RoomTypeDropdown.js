import React, { useState, useEffect } from 'react';
import { fetchRooms } from '../../utils/services/RoomPageService';

function RoomTypeDropdown({ onChange, id, value }) {
  const [roomTypes, setRoomTypes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchRooms(setRoomTypes, setApiError);
  }, []);

  return (
    <div>
      <label htmlFor={id}>
        Room Types
        <div>
          <select
            id={id}
            onBlur={onChange}
            onChange={onChange}
            value={value}
          >
            {roomTypes.filter((object) => (object.active === true)).map((roomType) => (
              <option
                value={roomType.id}
                key={roomType.name}
              >
                {roomType.name}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  );
}

export default RoomTypeDropdown;
