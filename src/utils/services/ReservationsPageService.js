import { toast } from 'react-toastify';
import HttpHelper from '../HttpHelper';
import Constants from '../constants';

/**
 *
 * @name fetchReservations
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setReservations sets state for reservations
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for reservations if 200 response, else sets state for apiError
 */
async function fetchReservations(setReservations, setApiError) {
  await HttpHelper(Constants.RESERVATION_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setReservations)
    .catch(() => {
      setApiError(true);
    });
}

/**
 * @name getReservationById
 * @description Utilizes HttpHelper to make a PUT request to an API
 * @param {int} reservationId
 * @param {object} reservation object passed from front end form elements.
 */
async function getReservationById(reservationId, setReservations) {
  await HttpHelper(`${Constants.RESERVATION_ENDPOINT}/${reservationId}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(((info) => setReservations(info)));
}

/**
 *
 * @name deleteReservationById
 * @description Utilizes HttpHelper to make a DELETE request to an API
 * @param {int} reservationId id of reservation to be deleted
 * @returns a deleted reservation or throws an error
 */
async function deleteReservationById(reservationId, updateRes) {
  await HttpHelper(`${Constants.RESERVATION_ENDPOINT}/${reservationId}`, 'DELETE')
    .then((response) => {
      if (response.ok) {
        response.json();
        updateRes();
        toast.success('Reservation successfully deleted');
      }
      if (response.status === 400) {
        throw new Error('Server error. Try again.');
      }
      throw new Error(Constants.API_ERROR);
    });
}
/**
 *
 * @name addReservation
 * @description Utilizes HttpHelper to make a PUT request to an API
 * @param reservation to add to repo
 * @returns a deleted reservation or throws an error
 */
async function addReservation(newReservation) {
  await HttpHelper(Constants.RESERVATION_ENDPOINT, 'POST', newReservation)
    .then((response) => {
      if (response.ok) {
        toast.success('A reservation was added to the database');
        response.json();
      } else {
        throw new Error(Constants.API_ERROR);
      }
    })
    .then(Object.assign(newReservation))
    .catch(() => {
      toast.error('Reservation unsuccessful');
    });
}

/**
 * @name editReservationById
 * @description Utilizes HttpHelper to make a PUT request to an API
 * @param {int} roomId
 * @param {object} editedRooms object passed from front end form elements.
 */
async function editReservationById(editedRes, res) {
  await HttpHelper(`${Constants.RESERVATION_ENDPOINT}/${res.id}`, 'PUT', editedRes)
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
 * @name fetchRate
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setRate sets state for rate
 * @param {*} ShippingState state for which shipping rate is being requested
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
async function fetchRate(setRate, roomTypeId, setApiError) {
  await HttpHelper(`${Constants.ROOMTYPE_ENDPOINT}/?rate=${roomTypeId}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setRate)
    .catch(() => {
      setApiError(false);
    });
}
export {
  deleteReservationById,
  getReservationById,
  editReservationById,
  fetchReservations,
  addReservation,
  fetchRate
};
