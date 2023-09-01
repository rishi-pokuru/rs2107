import React from 'react';
import PropTypes from 'prop-types';

const PlanCircle = ({ children, num }) => (
  <div className={`plan-type is-inline-block mr-${num}`}>{children}</div>
);

PlanCircle.propTypes = {
  children: PropTypes.string,
  num: PropTypes.string,
};
PropTypes.defaultProps = {
  children: '',
};
export default PlanCircle;
