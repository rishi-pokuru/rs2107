import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({
  label,
  selectedDate,
  onDateChange,
  dateFormat,
  onBlur,
  minDate,
  maxDate,
  disablePast,
  disableFuture,
  id,
}) => {
  const allowedFormat = ['MM/dd/yyyy', 'MM/yyyy', 'QQQ, yyyy']; // defining the allowed formats
  return (
    <div>
      <label className="label">{label}</label>
      <div className="field">
        <div className="control has-icons-right">
          <DatePicker
            className="input"
            selected={selectedDate}
            showMonthYearPicker={dateFormat == 'MM/yyyy'} // activating month picker if format is month selector
            showQuarterYearPicker={dateFormat == 'QQQ, yyyy'} // activating quater picker if format is quater selector
            onChange={(date) => onDateChange(date)} // change event association to callback
            onBlur={() => {
              onBlur();
            }}
            minDate={
              disablePast
                ? moment().toDate()
                : moment(minDate, dateFormat).toDate()
            }
            maxDate={
              disableFuture
                ? moment().toDate()
                : moment(maxDate, dateFormat).toDate()
            }
            dateFormat={
              allowedFormat.indexOf(dateFormat) > -1 ? dateFormat : 'MM/dd/yyyy' // verifying if given input is a valid format or not and reverting to default state
            }
            id={`datePicker-${id ? id : parseInt(Math.random() * 100)}`}
            portalId="root" // attaching the picker to and element of dom
            fixedHeight // fixed no of rows even if the days of months does not cover all rows
            popperProps={{
              strategy: 'fixed',
            }}
            popperPlacement="bottom"
          />
          <span className="icon is-right">
            <i className="mdi mdi-calendar-month"></i>
          </span>
        </div>
      </div>
      {/* showing warning when invalid format is passed */}
      {allowedFormat.indexOf(dateFormat) === -1 && (
        <div style={{ color: 'red', marginTop: '4px' }}>
          Given date format is invalid. Allowed format are &nbsp;
          {allowedFormat.join(', ')}
        </div>
      )}
      <br />
    </div>
  );
};

DateInput.propTypes = {
  label: PropTypes.string,
  selectedDate: PropTypes.object,
  onDateChange: PropTypes.func,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  dateFormat: PropTypes.oneOf(['MM/dd/yyyy', 'MM/yyyy', 'QQQ, yyyy']), // defining allowed formats
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  id: PropTypes.string,
};

DateInput.defaultProps = {
  dateFormat: 'MM/dd/yyyy',
};
export default DateInput;
