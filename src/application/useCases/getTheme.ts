import { darkTheme, lightTheme } from "application/common/theme";
import Theme from "interfaces/theme";

const selectTheme = (props: string): Theme =>
  props === "light" ? lightTheme : darkTheme;

export default selectTheme;
