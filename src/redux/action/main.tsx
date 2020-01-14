import { ThemeKey } from "../../constants/theme";

// action types
export const SET_THEME = "SET_THEME";

// action interfaces
export interface ISetTheme {
  type: typeof SET_THEME;
  payload: {
    theme: ThemeKey;
  };
}
export type MainActionTypes = ISetTheme;

// action creators
export const setTheme = (theme: ThemeKey): ISetTheme => ({
  type: SET_THEME,
  payload: { theme }
});