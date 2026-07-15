import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (val: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must me used within a provider!");
  return context;
}
