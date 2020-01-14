// action types
export const SET_TRACKED_CLASSES = "SET_TRACKED_CLASSES";

// action interfaces
export interface ISetTrackedClasses {
  type: typeof SET_TRACKED_CLASSES;
  payload: {
    classes: any[]; // TODO
  };
}
export type ClassTrackerActionTypes = ISetTrackedClasses;

// action creators
export const setTrackedClasses = (classes: any[]): ISetTrackedClasses => ({
  type: SET_TRACKED_CLASSES,
  payload: { classes }
});