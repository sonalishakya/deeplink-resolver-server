import { useContext } from "react";
import { AppThemeContext } from "../providers";

export const useAppTheme = () => useContext(AppThemeContext);