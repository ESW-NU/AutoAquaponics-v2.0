import { useState, useEffect } from 'react';

const TypedText = ({string, typeSpeed}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const cursor = currentIndex < string.length ? "|" : "";

  function moveChar() {
    setCurrentText(prevText => prevText + string[currentIndex]);
    setCurrentIndex(prevIndex => prevIndex + 1);
  }

  useEffect(()=> {
    if (currentIndex < string.length) {
      const timeout = setTimeout(moveChar, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex])

  return <>{currentText}{cursor}</>;
};

export default TypedText;