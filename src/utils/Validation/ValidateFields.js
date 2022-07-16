/**
 *
 * Checks for empty, null, or space filled fields.
 * checks to make sure number fields aren't <= 0
 * @param {Object} field is a product field.
 * @returns {Object} error object for state.
 */
function validateFields(field) {
  let error = '';
  let inputValue = field[1];
  if (typeof (inputValue) === 'string') {
    inputValue = inputValue.trim();
  }
  if ((inputValue === undefined || inputValue === null || inputValue === '')) {
    error = `${field[0]}: Required Field`;
  }
  if (typeof (input) === 'number' && inputValue <= 0) {
    error = `${field[0]}: Must be greater than 0`;
  }
  return error;
}

export default validateFields;
