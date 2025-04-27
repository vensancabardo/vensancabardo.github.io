import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { CornerUpLeft, Plus, SkipForward } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TypingAnimation from "../typing-animation/typing-animation";
import Link from "next/link";

function Avatar() {
  return (
    <div className="w-10 h-10">
      <Image
        src="/profile.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-full"
      />
    </div>
  );
}

export function Chat({
  children,
  title,
  chatContent,
}: {
  children: React.ReactNode;
  title: string;
  chatContent: string;
}) {
  const [skipPressed, setSkipPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetDivRef = useRef(null); // Reference for the target div

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Check if the div is visible
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (targetDivRef.current) {
      observer.observe(targetDivRef.current); // Observe the div
    }

    // Cleanup on unmount
    return () => {
      if (targetDivRef.current) {
        observer.unobserve(targetDivRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setSkipPressed(false);
    }
  }, [isVisible]);

  return (
    <div
      ref={targetDivRef}
      className="self-center p-5 sm:p-14 rounded-lg size-full text-sm overflow-auto"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-4">
            <Avatar />
          </div>
          <div className="bg-accent rounded-3xl p-5 text-sm w-5/6">
            <div className="flex flex-col gap-3">
              <div className="text-xl">{title}</div>
              {isVisible ? (
                <TypingAnimation
                  textToType={chatContent}
                  stopAnimation={skipPressed}
                />
              ) : null}

              <div>{children}</div>
              <div className="flex flex-wrap gap-2 pt-4">
                <Button variant="outline" className="rounded-full">
                  <Link href="/" className="flex flex-row gap-2 truncate">
                    <CornerUpLeft /> Go back to chat
                  </Link>
                </Button>
                <Button
                  onClick={() => setSkipPressed(true)}
                  className="rounded-full"
                  variant="outline"
                >
                  <SkipForward /> Skip typing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
