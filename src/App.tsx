import { useState } from "react";
import { ThemeContext, type Theme } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { twMerge } from "tailwind-merge";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={twMerge("h-screen", theme === "dark" && "dark")}>
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
