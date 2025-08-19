"use-client";

import { useState, useEffect } from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // return system preference, if no savedTheme

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-mode"
        checked={darkMode}
        onCheckedChange={setDarkMode}
        className="cursor-pointer"
      />
      <Label htmlFor="theme-mode">
        {darkMode ? (
          <img
            src="https://ik.imagekit.io/p2ho5d9bi/Portfolio/light-mode.png?updatedAt=1755635882399"
            alt="Icon to switch to dark mode"
            width={35}
            height={35}
          />
        ) : (
          <img
            src="https://ik.imagekit.io/p2ho5d9bi/Portfolio/dark-mode.png?updatedAt=175563625800"
            alt=""
            width={25}
            height={20}
          />
        )}
      </Label>
    </div>
  );
}
