import React, { Component, useState } from "react";

import {
  ApplicationProvider,
  IconRegistry
} from "@ui-kitten/components";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/navigation/index";
import { ThemeKey, themes } from "./src/constants/theme";
import { Provider } from "react-redux";
import { mapping, light as lightTheme } from '@eva-design/eva';
import store from "./src/redux/store";

const App: React.FC = () => {
  const [theme, setTheme] = useState("Northeastern")

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider
          mapping={mapping}
          theme={themes[theme]}
        >
          <AppNavigator />
        </ApplicationProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;