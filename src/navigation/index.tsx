import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { HomeScreen } from "../components/";
import Events from "../components/Events";
import LibraryBooking from "../components/LibraryBooking";
import LibraryRooms from "../components/LibraryRooms";
import Settings from "../components/Settings";

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Events: Events,
    LibraryBooking: LibraryBooking,
    LibraryRooms: LibraryRooms,
    Settings: Settings
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: 'center',
  }
);

export const AppNavigator = createAppContainer(HomeNavigator);
