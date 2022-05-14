import selectTheme from "application/useCases/getTheme";
import Theme from "interfaces/theme";

/*
Those two functions comunicate the local storage 
with the application layer.
*/

const getTheme = (): Theme => {
  const theme = localStorage.getItem("theme") || "light";
  localStorage.setItem("theme", theme);
  return selectTheme(theme);
};

const changeTheme = (theme: string): void => {
  if (theme !== "light" && theme !== "dark") return;
  localStorage.setItem("theme", theme ?? "light");
};

export { getTheme, changeTheme };
