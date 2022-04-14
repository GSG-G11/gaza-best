import React from 'react';

function ScrollUp() {
  const toUp = (e) => {
    e.target.style.opacity = 0;
    e.target.style.visibility = 'hidden';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button onClick={(e) => toUp(e)} id="scroll-to-top" type="button" aria-label="scrollUp"><i className="fas fa-chevron-up" /></button>
  );
}
export default ScrollUp;
