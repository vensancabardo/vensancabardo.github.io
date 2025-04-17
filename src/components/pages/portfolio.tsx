import { forwardRef } from "react";

const Portfolio = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="portfolio" ref={ref} className="h-screen w-screen">
      Portfolio
    </div>
  );
});

export default Portfolio;
