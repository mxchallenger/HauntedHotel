import patterns from './RegexPatterns';
import errors from './ValidationErrors';
/**
 * Validates through a regex pattern.
 * @param {Object} field of a product object to be validated.
 * @returns error string if not matched.
 */
function validateContents(field) {
  let error = '';

  const key = field[0];
  if (Object.prototype.hasOwnProperty.call(patterns, key, errors)) {
    if (!patterns[key].test(field[1])) {
      error = errors[key];
    }
  }
  return error;
}

export default validateContents;
