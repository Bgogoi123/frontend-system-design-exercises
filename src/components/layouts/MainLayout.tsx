import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useThemeContext } from "../../context/ThemeContext";
import Navbar from "../Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={twMerge(
        "h-screen bg-background text-textcolor-primary",
        theme === "dark" && "dark"
      )}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
