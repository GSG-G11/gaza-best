import React, { useState } from 'react';

// btn.onclick = () => {
//   this.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// window.onscroll = () => {
//   if (window.scrollY >= 50) {
//     btn.classList.add("not-active");
//   } else btn.classList.remove("not-active");
// };

function ScrollUp() {
  const [toScroll, settoScroll] = useState(false);
  const toUp = (e) => {
    e.target.style.opacity = 0;
    e.target.style.visibility = 'hidden';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  // window.onscroll = () => {
  //   if (window.scrollY >= 50) return true;
  //   settoScroll(true);
  // };

  return (
    <button onClick={(e) => toUp(e)} id="scroll-to-top" type="button" aria-label="scrollUp"><i className="fas fa-chevron-up" /></button>
  );
}
export default ScrollUp;
