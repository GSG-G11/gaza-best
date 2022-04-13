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
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => undefined,
  children: {},
  className: '',
};

export default Button;
