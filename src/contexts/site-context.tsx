"use client";

import { createContext, useContext } from "react";
import { useTheme } from "./use-theme";
import { useBackgroundType } from "./use-background";

type SiteContextType = ReturnType<typeof useTheme> &
  ReturnType<typeof useBackgroundType>;

const SiteContext = createContext<SiteContextType | undefined>(undefined);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const themeVars = useTheme();
  const backgroundTypeVars = useBackgroundType();

  return (
    <SiteContext.Provider
      value={{
        ...themeVars,
        ...backgroundTypeVars,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSiteContext must be used within a ContextProvider");
  }
  return context;
}

export default ContextProvider;
