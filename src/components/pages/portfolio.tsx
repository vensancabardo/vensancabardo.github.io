import { forwardRef } from "react";
import { Chat } from "../chat/chat";
import { GlowingEffect } from "../ui/glowing-effect";
import {
  Book,
  Computer,
  Dog,
  ThumbsDown,
  Volleyball,
  VolleyballIcon,
} from "lucide-react";
import GlowingCardGrid from "../acernity/glowing-cards";

const Portfolio = forwardRef<HTMLDivElement>((props, ref) => {
  const words = `
      Click the cards below for an in-depth look at some of my side projects.
    `;

  const title = "🖥️ My Projects";

  const projects = [
    {
      headerPhotoPath: "",
      logo: <Computer className="size-4" />,
      title: "vensancabardo.github.io",
      description: `
      📍 You are here!

      This project is a Next.js application built with React, Tailwind CSS, and shadcn components.

      You'll notice that it looks like a generative AI chat bot. While it is not a real chatbot and is not connected to an LLM in any way, I thought that the style aligns well with my current line of work and would be a creative way to showcase my front-end development abilities.
      `,
      clickable: true,
    },
    // {
    //   headerPhotoPath: "",
    //   logo: <VolleyballIcon className="size-4" />,
    //   title: "Game",
    //   description: `
    //   This project is currently under construction. Check back soon to see more!
    //   `,
    //   clickable: true,
    //   link: "portfolio/resume-game",
    // },
  ];

  const gridStyling = "grid grid-cols-1 gap-2 md:grid-cols-2";

  return (
    <div id="portfolio" ref={ref} className="h-screen w-screen snap-center">
      <Chat title={title} chatContent={words}>
        <GlowingCardGrid cards={projects} gridStyling={gridStyling} />
      </Chat>
    </div>
  );
});

export default Portfolio;
