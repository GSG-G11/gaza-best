import React from 'react';
import propTypes from 'prop-types';

function Button({ onClick, text }) {
  return (
    <button value="name" type="button" onClick={() => onClick()}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
};

export default Button;
