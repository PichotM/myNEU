import { SET_TRACKED_CLASSES, ClassTrackerActionTypes } from "../action/classtracker";

export interface IInitialClassTrackerState {
    classes : any[]
}

const initialMainState: IInitialClassTrackerState = {
    classes : [
      { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0 }
    ]
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