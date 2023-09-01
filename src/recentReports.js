import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import { Link } from 'react-router-dom';
import { getMenuByReportId } from './menuUtils';
const RecentReports = ({ reportIds }) => {
  const [reports, setReports] = React.useState([]);
  React.useEffect(() => {
    // we are using useEffect to listen to params and generate the report details from reportids
    if (reportIds) {
      // verifying if reports have data
      let rpts = reportIds.map((report) => {
        //running loop to get each report details
        return getMenuByReportId(report);
      });
      // console.log(rpts);
      setReports(rpts); // setting reports data to local state variable for rendering
    }
  }, [reportIds]);
  return (
    <div class="box">
      <Header size="4" color="primary">
        Recently Viewed Reports
      </Header>
      <div className="columns">
        {reports.map((report, i) => (
          <div className="column is-one-third" key={i}>
            <Link to={report.path}>{report.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
RecentReports.propTypes = {
  reportIds: PropTypes.array,
};
RecentReports.defaultProps = {
  reportIds: [],
};
export default RecentReports;
