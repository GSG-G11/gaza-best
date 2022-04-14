import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ScrollUp({ appear }) {
  const toUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={toUp} className={appear && 'active'} id="scroll-to-top">
      <i className="fas fa-chevron-up" />
    </Button>
  );
}

ScrollUp.propTypes = {
  appear: PropTypes.bool.isRequired,
};

export default ScrollUp;
