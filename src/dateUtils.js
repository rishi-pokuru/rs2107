export function validateDateRange({ date1, date2 }) {
  let error = null;
  if (!date1 && !date2) {
    if (!error) {
      error = {};
    }
    error['error'] = 'Both Start date and End date are required';
  } else if (!date1) {
    if (!error) {
      error = {};
    }
    error['error1'] = 'Start date is required';
  } else if (!date2) {
    if (!error) {
      error = {};
    }
    error['error2'] = 'End date is required';
  } else if (date1 > date2) {
    if (!error) {
      error = {};
    }
    error['error'] = 'End date must be greater than Start date';
  }
  return error;
}
