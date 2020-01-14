import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { HomeScreen } from "../components/";
import Events from "../components/Events";
import LibraryBooking from "../components/library/LibraryBooking";
import LibraryRooms from "../components/library/LibraryRooms";
import Settings from "../components/settings/Settings";
import Profile from "../components/profile/Profile";
import Schedule from "../components/schedule/Schedule";
import ClassTracker from "../components/nubanner/ClassTracker";

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Events: Events,
    LibraryBooking: LibraryBooking,
    LibraryRooms: LibraryRooms,
    Settings: Settings,
    Profile: Profile,
    Schedule: Schedule,
    ClassTracker: ClassTracker
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: 'center',
  }
);

export const AppNavigator = createAppContainer(HomeNavigator);
