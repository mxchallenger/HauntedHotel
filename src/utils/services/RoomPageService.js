import { toast } from 'react-toastify';
import supabase from '../../supabaseClient';

/**
 * @name fetchRooms
 * @description Fetches rooms from Supabase
 * @param {function} setRooms sets state for rooms
 */
async function fetchRooms() {
  const { data, error } = await supabase
    .from('room_types')
    .select('*');

  if (error) {
    throw error;
  }
  return data;
}

/**
 * @name fetchRoomById
 * @description Fetches a room by ID from Supabase
 * @param {int} id uses room type ID
 */
async function fetchRoomById(id) {
  const { data, error } = await supabase
    .from('room_types')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }
  return data;
}

/**
 * @name editRoomsById
 * @description Edits a room by ID in Supabase
 * @param {object} editedRoom edited room object
 * @param {int} id room ID
 */
async function editRoomsById(editedRoom, { id }) {
  const { error } = await supabase
    .from('room_types')
    .update(editedRoom)
    .eq('id', id);

  if (error) {
    throw error;
  }
}

/**
 * @name deleteRoomById
 * @description Deletes a room by ID in Supabase
 * @param {int} roomId id of room to be deleted
 */
async function deleteRoomById(roomId) {
  try {
    const { error } = await supabase
      .from('room_types')
      .delete()
      .eq('id', roomId);

    if (error) throw error;

    toast.success('Room successfully deleted');
  } catch (error) {
    toast.error('Server error. Try again.');
  }
}

/**
 * @name createNewRoom
 * @description Creates a new room in Supabase
 * @param {object} newRoom new room object
 */
async function createNewRoom(newRoom) {
  try {
    console.log('Attempting to create a new room:', newRoom);

    const { data, error } = await supabase
      .from('room_types')
      .insert(newRoom);

    if (error) {
      console.error('Error inserting new room:', error);
      throw error;
    }

    console.log('New room created:', data);
    toast.success('A room was added to the database');
  } catch (error) {
    toast.error('Room creation unsuccessful');
  }
}

export {
  fetchRooms, fetchRoomById, deleteRoomById, createNewRoom, editRoomsById
};
