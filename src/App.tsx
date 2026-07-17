import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { ThemeContext, type Theme } from "./context/ThemeContext";
import { router } from "./routes/router";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </ThemeContext.Provider>
  );
};

export default App;
