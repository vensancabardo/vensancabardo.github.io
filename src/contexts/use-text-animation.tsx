import { useEffect, useState } from "react";

type TextAnimationContextType = {
  textToAnimate: string;
  setTextToAnimate: (text: string) => void;
  displayedText: string;
  setDisplayedText: (displayedText: string) => void;
  setCurrentIndex: (index: number) => void;
};

export function useTextAnimation(): TextAnimationContextType {
  const [textToAnimate, setTextToAnimate] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const delay = 25; // in milliseconds

  useEffect(() => {
    if (currentIndex < textToAnimate.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + textToAnimate[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, textToAnimate]);

  return {
    textToAnimate,
    setTextToAnimate,
    displayedText,
    setDisplayedText,
    setCurrentIndex,
  };
}
