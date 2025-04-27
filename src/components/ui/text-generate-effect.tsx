"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  isVisible,
}: // onComplete,
{
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  isVisible: boolean;
  // onComplete: () => void;
}) => {
  const [scope, animate] = useAnimate();
  const [numAnimationsCompleted, setNumAnimationsCompleted] = useState(0);

  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const handleFinishWordAnimation = () => {
    if (isVisible) {
      console.log("yo");
      setNumAnimationsCompleted((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    console.log(numAnimationsCompleted);
    if (numAnimationsCompleted === wordsArray.length) {
      // onComplete();
    }
  }, [numAnimationsCompleted]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
              // initial="init"
              // animate="loaded"
              // onAnimationComplete={handleFinishWordAnimation}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className=" dark:text-white text-black leading-snug tracking-wide text-sm">
      {renderWords()}
    </div>
  );
};
