import darkIconSrc from "../assets/icons/moon-stars.svg";
import lightIconSrc from "../assets/icons/brightness-up.svg";
import { useThemeContext, type Theme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  const debouncedValue = useDebounce(currentTheme, 300);

  useEffect(() => {
    setTheme(debouncedValue);
  }, [debouncedValue]);

  return (
    <nav className="bg-textcolor-disabled px-4 py-2 fixed w-full flex flex-row">
      <button
        onClick={() =>
          setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
        className="ml-auto cursor-pointer rounded-full border border-gray-100 hover:bg-gray-100 duration-200 scale-100 active:scale-95 p-1"
      >
        <img src={currentTheme === "light" ? lightIconSrc : darkIconSrc} />
      </button>
    </nav>
  );
};

export default Navbar;
