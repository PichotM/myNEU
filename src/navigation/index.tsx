import React, { Component } from "react";
import HomeScreen from "../components/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      header: null
    },
    headerMode: 'none',
  }
);

export const AppNavigator = createAppContainer(HomeNavigator);
