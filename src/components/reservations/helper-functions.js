/**
 *@function getActiveRooms
 * @param {*} rooms
 * @returns active rooms
 */
const getActiveRooms = (rooms) => {
  const roomObject = rooms.filter((object) => (object.active === true));
  if (roomObject === undefined) {
    return undefined;
  }
  const activeRooms = ([...roomObject].map((r) => (r.name)));
  return activeRooms;
};
/**
 * @function getRoomRate
 * @param {*} reservation
 * @param {*} roomType
 * @returns gets the room rate of a reservation
 */
const getRoomRate = (reservation, roomType) => {
  const roomRate = roomType.find((room) => (room.id === reservation.roomTypeId));
  if (roomRate === undefined) {
    return undefined;
  }
  const totalRate = ((roomRate.rate) * (reservation.numberOfNights).toFixed(2));
  return totalRate;
};

export {
  getActiveRooms, getName, getRoomId, getRoomRate
};
