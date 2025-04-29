import { forwardRef } from "react";
import { Chat } from "../chat/chat";
import { Button } from "../ui/button";
import { Download, Mail } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import ScrollToNextButton from "../scroll-to-next-button";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const words = `
    I am a full-stack developer currently bringing efficiency and cost-savings 
    to Accenture clients through the creation of customized applications utilizing 
    generative AI to address their unique use cases.
  `;

  const title = "💻 About Me";

  return (
    <div id="about" ref={ref} className="h-dvh w-screen snap-center">
      <Chat chatContent={words} title={title}>
        <div className="text-sm py-3">My links:</div>
        <div className="flex flex-wrap gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => {
                    window.open("/Vensan_Cabardo_Resume.pdf", "_blank");
                  }}
                >
                  <Download className="self-center" /> <div>Resume</div>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download my resume</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  <a
                    href="mailto:vensancabardo@gmail.com"
                    className="flex flex-row gap-2 justify-center"
                  >
                    <Mail className="self-center" /> <div>Email</div>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send me an email</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  <a
                    href="https://github.com/vensancabardo"
                    target="_blank"
                    className="flex flex-row gap-2 justify-center"
                  >
                    <IconBrandGithub className="self-center" />{" "}
                    <div>GitHub</div>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>See my Github</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  <a
                    href="https://www.linkedin.com/in/vensan-cabardo/"
                    target="_blank"
                    className="flex flex-row gap-2 justify-center"
                  >
                    <IconBrandLinkedin className="self-center" />
                    <div>LinkedIn</div>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Check out my LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Chat>
      {/* <ScrollToNextButton /> */}
    </div>
  );
});

export default About;
