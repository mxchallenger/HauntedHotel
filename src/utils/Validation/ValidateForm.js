import validateContents from './ValidateContents';
import validateFields from './ValidateFields';

/**
 * @function validateForm takes form and runs through a global, custom validation
 * @param {Object} item to validate
 * @param {Function} errorsCallback sets errors state variable object
 * @param {Function} pushObj function that sends an object to add
 * to database.
 */
function validateForm(item, errorsCallback, pushObj) {
  console.log('Validating form:', item);
  console.log(pushObj);
  const fieldErrors = {};
  Object.entries(item).forEach((field) => {
    let errorValue = '';
    errorValue = validateFields(field);
    if (!errorValue) {
      errorValue = validateContents(field);
    }
    if (errorValue) {
      const error = { [field[0]]: `${errorValue}` };
      Object.assign(fieldErrors, error);
    }
  });

  const errorsArray = Object.entries(fieldErrors);
  if (errorsArray.length <= 0) {
    pushObj();
  } else {
    errorsCallback(fieldErrors);
  }
}

export default validateForm;
