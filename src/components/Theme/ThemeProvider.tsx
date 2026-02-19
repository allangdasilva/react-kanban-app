import React from "react";
import { useBoundStore } from "../../store/bound.stores";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isLight = useBoundStore((state) => state.isLight);

  React.useEffect(() => {
    window.document.documentElement.classList.toggle("light", isLight);
  }, [isLight]);

  return children;
};

export default ThemeProvider;
