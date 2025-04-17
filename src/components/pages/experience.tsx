import { forwardRef } from "react";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="experience" ref={ref} className="h-screen w-screen">
      Experience
    </div>
  );
});

export default Experience;
