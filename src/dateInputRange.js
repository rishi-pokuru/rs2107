import React, { useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import DateInput from './dateInput';
import { validateDateRange } from './dateUtils';

const useIsMount = () => {
  const isMountRef = React.useRef(true);
  React.useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const dateFormats = {
  date: 'MM/dd/yyyy',
  month: 'MM/yyyy',
  quater: 'QQQ, yyyy',
};

const DateInputRange = React.forwardRef(
  ({ disableFuture, disablePast, minDate, maxDate, type }, ref) => {
    const [date1, setDate1] = React.useState();
    const [date2, setDate2] = React.useState();
    const [error, setError] = React.useState(null);
    const isMount = useIsMount();

    useImperativeHandle(ref, () => ({
      getDates: () => {
        const err = checkMonthRange();
        return err ? false : { date1, date2 };
      }, //exposed function to get the selected dates with reference
    }));
    const checkMonthRange = () => {
      const err = validateDateRange({ date1, date2 });
      setError(err);
      return err;
    };
    React.useEffect(() => {
      if (!isMount) {
        console.log('Effect was run');
        checkMonthRange();
      }
    }, [date1, date2]);
    return (
      <div>
        <DateInput
          label="start date" //to show the label against the input
          selectedDate={date1} // date value for the input
          dateFormat={dateFormats[type]} // format for the
          onDateChange={(val) => setDate1(val)} // change event with return value
          disableFuture={disableFuture}
          disablePast={disablePast}
          minDate={minDate}
          maxDate={maxDate}
          onBlur={() => {
            checkMonthRange();
          }}
        />
        {/* Error messages for validation of start date */}
        {error?.error1 && <p className="help is-danger">{error?.error1}</p>}
        <DateInput
          label="end date" //to show the label against the input
          selectedDate={date2} // date value for the input
          dateFormat={dateFormats[type]} // format for the
          onDateChange={(val) => setDate2(val)} // change event with return value
          disableFuture={disableFuture}
          disablePast={disablePast}
          minDate={minDate}
          maxDate={maxDate}
          onBlur={() => {
            checkMonthRange();
          }}
        />
        {/* Error messages for validation of end date */}
        {error?.error2 && <p className="help is-danger">{error?.error2}</p>}
        {/* Error messages for validation of the range selector */}
        {error?.error && <p className="help is-danger">{error?.error}</p>}
      </div>
    );
  }
);

DateInputRange.propTypes = {
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  type: PropTypes.oneOf(['Date', 'Month', 'Quater']),
};
DateInputRange.displayName = 'DateInputRange'; //defining the display name for MonthRange component
export { DateInputRange };
