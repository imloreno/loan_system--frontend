import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  //handle theme change
  const getTheme = () => {
    const theme = localStorage.getItem("theme") || "light";
    setTheme(theme);
  };

  const pushTheme = (theme: string) => {
    if (theme !== "light" && theme !== "dark") return;
    localStorage.setItem("theme", theme);
    getTheme();
  };

  useEffect(() => {
    getTheme();
  }, []);

  return { theme, pushTheme };
};

export default useTheme;
