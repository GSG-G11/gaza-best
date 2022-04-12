import React from 'react';
import background from '../Assets/Images/background.jpg';

function Background() {
  return (
    <div className="background-image">
      <img src={background} alt="background" />
    </div>
  );
}

export default Background;
