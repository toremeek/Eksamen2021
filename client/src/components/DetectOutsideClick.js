/* eslint-disable react-hooks/rules-of-hooks */
/* koden er inspirert av: https://www.cluemediator.com/detect-click-outside-a-react-component-using-react-hooks */

import { useState, useEffect } from 'react';

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */

export const detectOutsideClick = (el) => {
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
