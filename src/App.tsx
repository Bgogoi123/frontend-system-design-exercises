import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { ThemeContext, type Theme } from "./context/ThemeContext";
import { router } from "./routes/router";

const App = () => {
  const localTheme = localStorage.getItem("theme") as Theme | null;
  const [theme, setTheme] = useState<Theme>(localTheme ?? "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
