"use client";

import { useRef, useState } from "react";
import Experience from "@/components/pages/experience";
import Portfolio from "@/components/pages/portfolio";
import Skills from "@/components/pages/skills";
import About from "@/components/pages/about";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useTextAnimation } from "@/contexts/use-text-animation";

type Question = {
  prompt: string;
  label: string;
};

export default function Page() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const questions = [
    {
      prompt: "Give me an overview of yourself.",
      label: "About Me",
    },
    {
      prompt: "What technologies are you experienced in?",
      label: "Skills",
    },
    {
      prompt: "Where have you worked?",
      label: "Experience",
    },
    {
      prompt: "Show me some of your projects.",
      label: "Portfolio",
    },
  ];

  const placeholders = questions.map((question) => question.prompt);

  const [question, setQuestion] = useState<Question>({
    prompt: "",
    label: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (question.label) {
      case "About Me": {
        console.log(aboutRef);
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      }

      case "Skills": {
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;
        }
      }

      case "Experience": {
        if (experienceRef.current) {
          experienceRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;
        }
      }

      case "Portfolio": {
        if (portfolioRef.current) {
          portfolioRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          break;
        }
      }

      default: {
        return null;
      }
    }
  };

  const { setTextToAnimate, displayedText, setDisplayedText, setCurrentIndex } =
    useTextAnimation();

  const handleBadgeClick = (selectedQuestion: Question) => {
    setDisplayedText("");
    setCurrentIndex(0);
    setTextToAnimate(selectedQuestion.prompt);
    setQuestion(selectedQuestion);
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center px-4 snap-center">
        <h2 className="mb-5 sm:mb-10 text-5xl text-center dark:text-white text-black">
          Hello!
        </h2>
        <p className="mb-5 sm:mb-10 text-xl text-center dark:text-gray-300 text-gray-600">
          My name is Vensan Cabardo. What would you like to know?
        </p>

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          prompt={displayedText}
          onChange={() => {}}
          onSubmit={onSubmit}
        />

        <p className="text-gray-400 text-xs pt-3">
          Click any of these buttons and press the arrow to learn more!
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {questions.map((question, index) => {
            return (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleBadgeClick(question)}
                className="rounded-3xl border"
              >
                {question.label}
              </Button>
            );
          })}
        </div>
      </div>
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Portfolio ref={portfolioRef} />
    </>
  );
}
