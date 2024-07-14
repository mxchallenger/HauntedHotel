/**
 * REGEX patterns used in validation.
 */
const patterns = {
  // meets the pattern x@x.x - but not the best for an email.
  guest_email: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
  // matches the MM/DD/YYYY pattern requested - allows for nonsense numeric dates.
  check_in_date: /^(\d{2})([-]{1})(\d{2})([-]{1})(\d{4})$/,
  // matches for 3 or more alphanumeric chars and underscore
  name: /[\w]{3,}/,
  // matches for positive numbers that start with either $ or 1-9 (positive only)
  // accommodates w/ or w/o a decimal with 2 trailing digits and large numbers
  rate: /^(\$)?([1-9]{1})([\d]{0,})(.?)(([\d]{0})|([\d]{2}))$/,
  number_of_nights: /^([1-9]{1,})/
};

export default patterns;
