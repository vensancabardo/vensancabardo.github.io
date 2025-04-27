import { useTextAnimation } from "@/contexts/use-text-animation";
import { useEffect } from "react";

export default function TypingAnimation({
  textToType,
  stopAnimation,
}: {
  textToType: string;
  stopAnimation: boolean;
}) {
  const { setTextToAnimate, displayedText, setDisplayedText, setCurrentIndex } =
    useTextAnimation();

  useEffect(() => {
    setTextToAnimate(textToType);
  }, []);

  useEffect(() => {
    if (stopAnimation) {
      setDisplayedText(textToType);
      setCurrentIndex(textToType.length);
    }
  }, [stopAnimation]);

  return <div>{displayedText}</div>;
}
