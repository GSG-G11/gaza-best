import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, className = '', children }) {
  return (
    <button className={className} value="name" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.objectOf().isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
