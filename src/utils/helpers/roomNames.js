function RoomNameToId() {
  const names = {
    king: 1,
    'king double': 2,
    'executive suite': 3,
    'honeymoon suite': 4,
    queen: 5,
    'queen double': 6,
    'extended stay': 7
  };

  if (names === undefined) {
    return null;
  }

  const roomTypeId = names.trim().replace(/[^\w ]/g, '').toLowerCase();
  if (names[roomTypeId] !== null) {
    return names[roomTypeId];
  }

  return null;
}

export default RoomNameToId;
