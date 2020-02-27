import { TrackedClass } from "../../models/TrackedClass";

// action types
export const SET_TRACKED_CLASSES = "SET_TRACKED_CLASSES";
export const ADD_TRACKED_CLASS = "ADD_TRACKED_CLASS";

// action interfaces
export interface ISetTrackedClasses {
  type: typeof SET_TRACKED_CLASSES;
  payload: {
    classes: TrackedClass[]; // TODO
  };
}

export interface IAddTrackedClass {
  type: typeof ADD_TRACKED_CLASS;
  payload: {
    trackedClass: TrackedClass; // TODO
  };
}

export type ClassTrackerActionTypes = ISetTrackedClasses | IAddTrackedClass;

// action creators
export const setTrackedClasses = (classes: any[]): ISetTrackedClasses => ({
  type: SET_TRACKED_CLASSES,
  payload: { classes }
});

export const addTrackedClass = (trackedClass: TrackedClass): IAddTrackedClass => ({
  type: ADD_TRACKED_CLASS,
  payload: { trackedClass }
});