import { SET_TRACKED_CLASSES, ClassTrackerActionTypes } from "../action/classtracker";
import { TrackedClass } from "../../models/TrackedClass";


export interface IInitialClassTrackerState {
    classes : TrackedClass[]
}

const initialMainState: IInitialClassTrackerState = {
    classes : []
};

const ClassTrackerReducer = (state = initialMainState, action: ClassTrackerActionTypes): IInitialClassTrackerState => {
  switch (action.type) {
    case SET_TRACKED_CLASSES:
      return { ...state, classes : action.payload.classes }
    default:
      return state;
  }
};

export default ClassTrackerReducer;