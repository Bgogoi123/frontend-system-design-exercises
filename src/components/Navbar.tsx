import darkIconSrc from "../assets/icons/moon-stars.svg";
import lightIconSrc from "../assets/icons/brightness-up.svg";
import { useThemeContext, type Theme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import Button from "./ui/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useThemeContext();
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  const debouncedValue = useDebounce(currentTheme, 300);

  console.log({ location });

  useEffect(() => {
    setTheme(debouncedValue);
    localStorage.setItem("theme", debouncedValue);
  }, [debouncedValue]);

  return (
    <nav className="bg-textcolor-disabled px-4 py-2 fixed top-0 left-0 w-full flex flex-row z-50">
      {location.pathname !== "/" && (
        <Button variant="standard" onClick={() => navigate(-1)}>
          Back
        </Button>
      )}

      <button
        onClick={() =>
          setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        className="ml-auto cursor-pointer rounded-full border border-gray-1 hover:bg-gray-1 duration-200 scale-100 active:scale-95 p-1"
      >
        <img src={currentTheme === "light" ? lightIconSrc : darkIconSrc} />
      </button>
    </nav>
  );
};

export default Navbar;
