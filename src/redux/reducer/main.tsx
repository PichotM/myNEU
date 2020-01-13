import { MenuActionTypes, SET_THEME } from "../action";
import { ThemeKey } from "../../constants/theme";

export interface IInitialMainState {
  theme : ThemeKey
}

const initialMainState: IInitialMainState = {
  theme : "Northeastern"
};

const MainReducer = (state = initialMainState, action: MenuActionTypes): IInitialMainState => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme : action.payload.theme }
    default:
      return state;
  }
};

export default MainReducer;