import { forwardRef, useState } from "react";
import { Chat } from "../chat/chat";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

  return (
    <div id="about" ref={ref} className="h-screen w-screen">
      <Chat mode="chat">
        <TextGenerateEffect words={words} />
      </Chat>
    </div>
  );
});

export default About;
