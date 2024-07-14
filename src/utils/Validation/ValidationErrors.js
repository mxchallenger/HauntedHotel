/**
 * @returns custom error handling
 */
const errors = {
  guest_email: 'Must be a valid email',
  check_in_date: 'Date must be mm-dd-yyyy',
  number_of_nights: 'Must be number greater than zero',
  roomType: 'Must select a room type',
  name: 'Must be at least 3 characters',
  rate: 'Must be number greater than zero'
};

export default errors;
