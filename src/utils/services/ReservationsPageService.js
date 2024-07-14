import { toast } from 'react-toastify';
import supabase from '../../supabaseClient';

/**
 * @name fetchReservations
 * @description Fetch reservations from Supabase
 * @param {function} setReservations sets state for reservations
 * @param {function} setApiError sets error if response other than 200 is returned
 * @returns sets state for reservations if successful, else sets state for apiError
 */
async function fetchReservations(setReservations, setApiError) {
  try {
    const { data, error } = await supabase
      .from('reservations')
      .select('*');

    if (error) throw error;
    console.log(data);
    setReservations(data);
  } catch (error) {
    setApiError(true);
  }
}

/**
 * @name getReservationById
 * @description Fetches a reservation by ID from Supabase
 * @param {int} id Reservation ID
 * @returns {object} Reservation data
 */
async function getReservationById(id) {
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }
  return data;
}

/**
 * @name deleteReservationById
 * @description Delete a reservation by ID from Supabase
 * @param {int} reservationId id of reservation to be deleted
 * @param {function} updateRes function to update reservations after deletion
 */
async function deleteReservationById(reservationId, updateRes) {
  try {
    const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', reservationId);

    if (error) throw error;

    updateRes();
    toast.success('Reservation successfully deleted');
  } catch (error) {
    toast.error('Server error. Try again.');
  }
}

/**
 * @name addReservation
 * @description Add a reservation to Supabase
 * @param {object} newReservation reservation object to add
 */
async function addReservation(newReservation) {
  try {
    const { error } = await supabase
      .from('reservations')
      .insert(newReservation);

    if (error) throw error;

    toast.success('A reservation was added to the database');
  } catch (error) {
    toast.error('Reservation unsuccessful');
  }
}

/**
 * @name editReservationById
 * @description Edits a reservation by ID in Supabase
 * @param {object} updatedReservation updated reservation object
 */
async function editReservationById(updatedReservation) {
  const { id, ...updateData } = updatedReservation;
  console.log('Updating reservation with data:', updateData); // Log the data being sent to Supabase

  const { error } = await supabase
    .from('reservations')
    .update(updateData)
    .eq('id', id);

  if (error) {
    console.error('Error from Supabase:', error); // Log the error returned from Supabase
    throw error;
  }
}

/**
 * @name fetchRate
 * @description Fetch rate from Supabase
 * @param {function} setRate sets state for rate
 * @param {int} roomTypeId room type ID to fetch rate for
 * @param {function} setApiError sets error if response other than 200 is returned
 * @returns sets state for rate if successful, else sets state for apiError
 */
async function fetchRate(setRate, roomTypeId, setApiError) {
  try {
    const { data, error } = await supabase
      .from('room_types')
      .select('rate')
      .eq('id', roomTypeId)
      .single();

    if (error) throw error;

    setRate(data);
  } catch (error) {
    setApiError(true);
  }
}

// Export all functions at the bottom
export {
  deleteReservationById,
  getReservationById,
  editReservationById,
  fetchReservations,
  addReservation,
  fetchRate
};
