"use client";

import { useEffect, useRef, useState } from "react";
import Experience from "@/components/pages/experience";
import Portfolio from "@/components/pages/portfolio";
import Skills from "@/components/pages/skills";
import Contact from "@/components/pages/contact";
import About from "@/components/pages/about";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { twMerge } from "tailwind-merge";

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

  const dummyContent = [
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Sit duis est minim proident non nisi velit non consectetur. Esse
            adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
            Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat
            incididunt incididunt enim magna id est qui sunt fugiat. Laboris do
            duis pariatur fugiat Lorem aute sit ullamco. Qui deserunt non
            reprehenderit dolore nisi velit exercitation Lorem qui do enim
            culpa. Aliqua eiusmod in occaecat reprehenderit laborum nostrud
            fugiat voluptate do Lorem culpa officia sint labore. Tempor
            consectetur excepteur ut fugiat veniam commodo et labore dolore
            commodo pariatur.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia
            qui irure id sint adipisicing. Adipisicing fugiat aliqua nulla
            nostrud. Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "React",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
          <p>
            In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
            veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
            reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
            cillum ut mollit.
          </p>
        </>
      ),
      badge: "Changelog",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lorem Ipsum Dolor Sit Amet",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt
            exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt
            consectetur sint qui qui do do qui do. Labore laborum culpa magna
            reprehenderit ea velit id esse adipisicing deserunt amet dolore.
            Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor
            aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "Launch Week",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
      prompt: "How can I contact you?",
      label: "Contact",
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

  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const delay = 25; // in milliseconds

  useEffect(() => {
    if (currentIndex < question.prompt.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(
          (prevText) => prevText + question.prompt[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, question.prompt]);

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

      case "Contact": {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({
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

  const handleBadgeClick = (selectedQuestion: Question) => {
    setDisplayedText("");
    setCurrentIndex(0);
    setQuestion(selectedQuestion);
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center px-4">
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
          Click any of these buttons to learn more!
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
      {/* <TracingBeam className="px-6"> */}
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Portfolio ref={portfolioRef} />
      <Contact ref={contactRef} />
      {/* </TracingBeam> */}
    </>
  );
}
