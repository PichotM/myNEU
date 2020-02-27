import { dark } from "@eva-design/eva";
import northeastern from "../assets/themes/northeastern.json";
import { ThemeType } from "@ui-kitten/components";

interface ThemeRegistry {
  ["Northeastern"]: ThemeType;
  ["Dark"]: ThemeType;
}

export type ThemeKey = keyof ThemeRegistry;

export const themes: ThemeRegistry = {
  Northeastern: northeastern,
  Dark: dark
};
