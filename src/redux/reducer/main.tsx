import { MenuActionTypes, SET_THEME } from "../action";
import { ThemeKey } from "../../constants/theme";

interface IState {
  theme : ThemeKey
}

const initialState: IState = {
  theme : "Northeastern"
};

const MainReducer = (state = initialState, action: MenuActionTypes): IState => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme : action.payload.theme }
    default:
      return state;
  }
};

export default MainReducer;