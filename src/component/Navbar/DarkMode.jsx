import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="flex justify-center items-center w-8">
        <button
          className={`w-12 cursor-pointer  transition-all duration-300  ${
            theme === "dark" ? " hidden" : " block"
          } `}
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
        >
          <FaMoon size={16} />
        </button>
        <button
          className={`w-12 cursor-pointer  transition-all duration-300  ${
            theme === "dark" ? "block" : "hidden"
          } `}
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
        >
          <MdSunny size={16} />
        </button>
      </div>
    </>
  );
};

export default DarkMode;
