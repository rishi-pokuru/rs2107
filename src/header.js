import React from 'react';
import PropTypes from 'prop-types';

function Header({ size, color, style, children }) {
  return (
    <div
      className={`is-size-${size} has-text-weight-${style}`}
      style={{ color: color }}
    >
      {children}
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  size: PropTypes.string,
  color: PropTypes.color,
  style: PropTypes.string,
};

Header.defaultProps = {
  label: '',
  size: '2',
  color: 'success-dark',
  style: 'semibold',
};
export default Header;
