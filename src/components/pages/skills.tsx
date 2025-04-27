import { forwardRef } from "react";
import { Chat } from "../chat/chat";
import { Book, Pencil } from "lucide-react";
import GlowingCardGrid from "../acernity/glowing-cards";
import {
  IconBrandAzure,
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandOpenai,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconRobot,
} from "@tabler/icons-react";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  const words = `
      I have proficiency in a wide variety of technical skills, which are 
      listed below.
  `;

  const title = "📖 My Skills";

  const languages = [
    {
      headerPhotoPath: "",
      logo: <IconBrandPython className="size-4" />,
      title: "Python",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandTypescript className="size-4" />,
      title: "TypeScript",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandJavascript className="size-4" />,
      title: "JavaScript",
      clickable: false,
    },
  ];

  const frameworks = [
    {
      headerPhotoPath: "",
      logo: <IconBrandReact className="size-4" />,
      title: "React",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandOpenai className="size-4" />,
      title: "Azure OpenAI",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconRobot className="size-4" />,
      title: "LangChain",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandTailwind className="size-4" />,
      title: "Tailwind",
      clickable: false,
    },
  ];

  const tools = [
    {
      headerPhotoPath: "",
      logo: <IconBrandGit className="size-4" />,
      title: "Git",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandGithub className="size-4" />,
      title: "GitHub",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandAzure className="size-4" />,
      title: "Azure",
      clickable: false,
    },
  ];

  const otherSkills = [
    {
      headerPhotoPath: "",
      logo: <Pencil className="size-4" />,
      title: "Prompt Engineering",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandHtml5 className="size-4" />,
      title: "HTML",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandCss3 className="size-4" />,
      title: "CSS",
      clickable: false,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandMongodb className="size-4" />,
      title: "MongoDB",
      clickable: false,
    },
  ];

  const gridStyling =
    "grid grid-cols-2 sm:grid-cols-3 gap-2 md:grid-cols-4 pb-3";

  return (
    <div id="skills" ref={ref} className="h-screen w-screen snap-center">
      <Chat title={title} chatContent={words}>
        {/* For mobile screens */}
        <div className="block sm:hidden">
          <GlowingCardGrid
            cards={[...languages, ...frameworks, ...tools, ...otherSkills]}
            gridStyling={gridStyling}
          />
        </div>

        {/* For larger screens */}
        <div className="hidden sm:block">
          <div className="pb-2">Languages</div>
          <GlowingCardGrid cards={languages} gridStyling={gridStyling} />

          <div className="pb-2">Frameworks and Libraries</div>
          <GlowingCardGrid cards={frameworks} gridStyling={gridStyling} />

          <div className="pb-2">Tools</div>
          <GlowingCardGrid cards={tools} gridStyling={gridStyling} />

          <div className="pb-2">Other Skills</div>
          <GlowingCardGrid cards={otherSkills} gridStyling={gridStyling} />
        </div>
      </Chat>
    </div>
  );
});

export default Skills;
