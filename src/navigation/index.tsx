import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { HomeScreen } from "../components/";
import Events from "../components/Events";
import LibraryBooking from "../components/LibraryBooking";

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Events: Events,
    LibraryBooking: LibraryBooking,
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: 'center',
  }
);

export const AppNavigator = createAppContainer(HomeNavigator);
