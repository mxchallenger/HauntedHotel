import { toast } from 'react-toastify';
import HttpHelper from '../HttpHelper';
import Constants from '../constants';

/**
 *
 * @name fetchRooms
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setReservations sets state for reservations
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for reservations if 200 response, else sets state for apiError
 */
async function fetchRooms(setRooms, setApiError) {
  await HttpHelper(Constants.ROOMTYPE_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setRooms)
    .catch(() => {
      setApiError(true);
    });
}
/**
 * @name fetchRoomById
 * @description Utilizes HttpHelper to make a GET request to an API
 * @param {int} id uses room type ID
 * @param {object} rooms
 */
async function fetchRoomById(id, setRooms) {
  await HttpHelper(`${Constants.ROOMTYPE_ENDPOINT}/${id}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    }).then(((info) => setRooms(info)));
}

/**
 * @name editRoomsById
 * @description Utilizes HttpHelper to make a PUT request to an API
 * @param {int} roomId
 * @param {object} editedRooms object passed from front end form elements.
 */
async function editRoomsById(editedRooms, rooms) {
  await HttpHelper(`${Constants.ROOMTYPE_ENDPOINT}/${rooms.id}`, 'PUT', editedRooms)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error('A server error occurred. Your updates have not been saved');
      }
      throw new Error(Constants.API_ERROR);
    });
}
/**
 *
 * @name deleteRoomById
 * @description Utilizes HttpHelper to make a DELETE request to an API
 * @param {int} roomId id of reservation to be deleted
 * @returns a deleted reservation or throws an error
 */
async function deleteRoomById(roomId) {
  await HttpHelper(`${Constants.ROOMTYPE_ENDPOINT}/${roomId}`, 'DELETE')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error('Server error. Try again.');
      }
      throw new Error(Constants.API_ERROR);
    });
}
/**
 *
 * @name createNewRoom
 * @description Utilizes HttpHelper to make a POST request to an API
 * @param newReservationForm
 * @returns
 */
async function createNewRoom(newRoom) {
  await HttpHelper(Constants.ROOMTYPE_ENDPOINT, 'POST', newRoom)
    .then((response) => {
      if (response.ok) {
        toast.success('A room was added to the database');
        response.json();
      } else {
        throw new Error(Constants.API_ERROR);
      }
    })
    .then(Object.assign(newRoom))
    .catch(() => {
      toast.error('Room unsuccessful');
    });
}

export {
  fetchRooms, fetchRoomById, deleteRoomById, createNewRoom, editRoomsById
};
