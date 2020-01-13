import React, { Component } from "react";

import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry
} from "@ui-kitten/components";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/navigation/index";
import { ThemeKey, themes } from "./src/constants/theme";
import { setTheme } from "./src/redux/action/main";
import { connect, Provider } from "react-redux";
import { mapping, light as lightTheme } from '@eva-design/eva';
import store from "./src/redux/store";

// Rien
type Props = {
  setTheme: Function;
};

interface State {
  theme: ThemeKey;
}

export default class App extends Component<Props, State> {
  public state: State = {
    theme: "Northeastern"
  };

  render() {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <Provider store={store}>
          <ApplicationProvider
            mapping={mapping}
            theme={themes[this.state.theme]}
          >
            <AppNavigator />
          </ApplicationProvider>
        </Provider>
      </React.Fragment>
    );
  }
}
