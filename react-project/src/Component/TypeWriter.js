import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the typing speed by changing the interval

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{displayText}</div>;
};

export default Typewriter;
