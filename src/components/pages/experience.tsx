import { forwardRef } from "react";
import { Chat } from "../chat/chat";
import { Computer, Rocket } from "lucide-react";
import { IconBrandGoogle, IconMathGreater } from "@tabler/icons-react";
import GlowingCardGrid from "../acernity/glowing-cards";
import YWiCExperience from "../dialog-bodies/experience/ywic";
import AccentureExperience from "../dialog-bodies/experience/accenture";
import NGExperience from "../dialog-bodies/experience/ng";
import GoogleExperience from "../dialog-bodies/experience/google";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const words = `
      I have 3 years of experience as a developer with Accenture. Prior to 
      this, I worked in computer science outreach and education, with some 
      additional experience gained from software engineering internships. 
      Click through the cards below to learn more.
  `;

  const title = "💼 My Work Experience";

  const experience = [
    {
      headerPhotoPath: "",
      logo: <IconMathGreater className="size-4" />,
      title: "Accenture - Tech Arch Senior Analyst / Full-Stack Developer",
      description: `
        Currently I am hard at working crafting customized Generative AI experiences for clients through the development of full-stack solutions that harness the power of LLMs in order to provide value in the form of time and cost savings.

        I develop the front- and back-end code for these solutions, utilizing strong software development skills to develop generative AI features across many use cases, such as code creation, documentation generation, test script creation, and more.
      `,
      clickable: true,
      dialogBody: <AccentureExperience />,
    },
    {
      headerPhotoPath: "",
      logo: <Computer className="size-4" />,
      title: "Research Assistant - Young Women in Computing",
      description: `
      Young Women in Computing, or YWiC, is an outreach organization within the computer science department of New Mexico State University (NMSU) that provides computer science outreach programs with the mission of promoting increased interest in technology careers from underrepresented groups.

      In addition, it provides services such as tutoring and network event hosting to the students of the NMSU computer science department. 

      In this capacity, I was responsible for creating and teaching curriculum in a wide variety of computer science topics, ranging anywhere from creating a game to creating a personal website to creating wearable e-textiles.

      A major accomplishment of mine was in spearheading the rapid migration of the program's computer science summer camp to an onine setting in the wake of COVID-19 lockdowns. 
      `,
      clickable: true,
      dialogBody: <YWiCExperience />,
    },
    {
      headerPhotoPath: "",
      logo: <Rocket className="size-4" />,
      title: "Northrop Grumman - Software Engineering Intern",
      description: `
      At Northrop Grumman, I was part of a Data Analytics team, where I did work developing applications and prototypes to increase the efficiency of the teams processes. 

      For example, I was responsible for the creation of a web application that would enable the team to visualize the flow of the data that supported their Tableau visualizations, with the goal of enabling management to quickly pinpoint the source of an extraction failure. 

      In addition, I was responsible for the creation of various prototypes to utilize the Tableau REST API for automating certain processes for the team, such as the retrieval of visualization information.
      `,
      clickable: true,
      dialogBody: <NGExperience />,
    },
    {
      headerPhotoPath: "",
      logo: <IconBrandGoogle className="size-4" />,
      title: "Google - Software Engineering Intern",
      description: `
      During my internship at Google, I was responsible for improving the front end of an Android application used to test an internal API for integrating useful notifications into Google first-party applications. 

      To that end, I leveraged my Java abilities in order to parse, organize, and display the responses from the API in a matter that would enable more efficient manual testing for the testing team. 
      `,
      clickable: true,
      dialogBody: <GoogleExperience />,
    },
  ];

  const gridStyling = "grid grid-cols-1 gap-2 md:grid-cols-2";

  return (
    <div id="experience" ref={ref} className="h-dvh w-screen snap-center">
      <Chat title={title} chatContent={words}>
        <GlowingCardGrid cards={experience} gridStyling={gridStyling} />
      </Chat>
    </div>
  );
});

export default Experience;
