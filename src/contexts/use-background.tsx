import { useState } from "react";

type BackgroundTypes = "laptop" | "phone" | "arcade" | "default";

type BackgroundContextType = {
  type: BackgroundTypes;
  setType: (type: BackgroundTypes) => void;
};

export function useBackgroundType(): BackgroundContextType {
  const [type, setType] = useState<BackgroundTypes>("default");

  return {
    type,
    setType,
  };
}
