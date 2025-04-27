import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function ScrollToNextButton() {
  return (
    <div className="self-end pb-14 flex flex-row">
      <Button
        size="icon"
        variant="secondary"
        className="self-center p-4 rounded-full mb-16 animate-bounce"
        disabled
      >
        <ArrowDown />
      </Button>
    </div>
  );
}
