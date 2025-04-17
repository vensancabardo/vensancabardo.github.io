import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="contact" ref={ref} className="h-screen w-screen">
      Contact
    </div>
  );
});

export default Contact;
