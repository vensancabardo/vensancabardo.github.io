import { forwardRef } from "react";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="skills" ref={ref} className="h-screen w-screen">
      Skills
    </div>
  );
});

export default Skills;
