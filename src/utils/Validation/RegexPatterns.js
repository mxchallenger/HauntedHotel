/**
 * REGEX patterns used in validation.
 */
const patterns = {
  // meets the pattern x@x.x - but not the best for an email.
  guestEmail: /^[\w-]+@[\w-]+.[\w-]+$/,
  // matches the MM/DD/YYYY pattern requested - allows for nonsense numeric dates.
  checkInDate: /^(\d{2})([-]{1})(\d{2})([-]{1})(\d{4})$/,
  // matches for 3 or more alphanumeric chars and underscore
  name: /[\w]{3,}/,
  // matches for positive numbers that start with either $ or 1-9 (positive only)
  // accommodates w/ or w/o a decimal with 2 trailing digits and large numbers
  rate: /^(\$)?([1-9]{1})([\d]{0,})(.?)(([\d]{0})|([\d]{2}))$/,
  numberOfNights: /^([1-9]{1,})/
};

export default patterns;
