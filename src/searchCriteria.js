import React, { useRef } from 'react';
import { DateInputRange } from './dateInputRange';
import axios from 'axios';
import Data from './sample.json';
import { useHistory } from 'react-router-dom';
import RecentReports from './recentReports';

export default function SearchCriteriaMonth() {
  // const navigate = new useHistory();
  const dateRangeRef = useRef();
  const options = ['22222', '33333'];
  const reportIds = ['5740'];
  const [selectedPlan, setSelectedPlan] = React.useState();
  const [error, setError] = React.useState();
  const [dateRange, setDateRange] = React.useState();
  const [data, setData] = React.useState();
  const onOptionChangeHandler = (event) => {
    setSelectedPlan(event.target.value);
    if (!event.target.value) {
      setError('select a plan');
    }
  };
  const handleClick = () => {
    setError();
    setData();
    let daterange = dateRangeRef.current.getDates();
    setDateRange(daterange);
    if (daterange && selectedPlan) {
      // navigate.push('result', { data: data });
      setData(Data);
      console.log('data has been set');
    } else if (!selectedPlan) {
      setError('select a plan');
    }
  };
  return (
    <div>
      <RecentReports reportIds={reportIds} />
      {data ? (
        <div>
          <div>
            <h2>Search Criteria</h2>
            <table>
              <tr>
                <th>Plan</th>
                <td>{selectedPlan}</td>
              </tr>
              <tr>
                <th>For the Period</th>
                <td>
                  {dateRange.date1.toLocaleDateString()} -
                  {dateRange.date2.toLocaleDateString()}
                </td>
              </tr>
            </table>
          </div>
          {data.length > 0 ? (
            <table>
              <thead>
                <tr className="is-uppercase">
                  <th>PARTICIPANT</th>
                  <th>SSN/Status</th>
                  <th>SET UP DATE</th>
                  <th>pre-tax deferal percentage</th>
                  <th>pre-tax deferal amount</th>
                  <th>roth deferal percentage</th>
                  <th>roth deferal amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((prod, inx) => (
                  <tr key={inx}>
                    <td>{prod.participant}</td>
                    <td>
                      {prod.ssn}/[{prod.status}]
                    </td>
                    <td>{prod.date}</td>
                    <td>{prod.pretax_deferal_percentage}%</td>
                    <td>${prod.pretax_deferal_amount}</td>
                    <td>{prod.roth_deferal_percentage}%</td>
                    <td>${prod.roth_deferal_amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <h2>No results</h2>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div class="select mb-4	">
            <select
              placeholder="select"
              value={selectedPlan}
              onChange={onOptionChangeHandler}
              onBlur={() => {
                console.log('blur');
                if (!selectedPlan) {
                  setError('select a plan');
                }
              }}
            >
              <option>Select plan</option>
              {options.map((opt, inx) => (
                <option value={opt} key={inx}>
                  {opt}
                </option>
              ))}
            </select>
            {error && <p className="help is-danger">{error}</p>}
          </div>
          <br />
          <DateInputRange
            ref={dateRangeRef}
            disableFuture={true}
            type={'month'}
          />
          <br />
          <div>
            <button
              onClick={(e) => {
                e.persist();
                handleClick();
              }}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
