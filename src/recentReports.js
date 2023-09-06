import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
import { getMenuByReportId } from './menuUtils';
import { getRecentReports } from './reports';
const RecentReports = () => {
  const [reports, setReports] = React.useState([]);
  React.useEffect(() => {
    // we are using useEffect to call the rest api and update the data
    const reportIds = getRecentReports();
    if (reportIds) {
      // verifying if reports have data
      let rpts = reportIds.map((report) => {
        //running loop to get each report details
        return getMenuByReportId(report);
      });
      // console.log(rpts);
      setReports(rpts); // setting reports data to local state variable for rendering
    }
  });
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

export default RecentReports;
