import React, { Component } from "react";

import {
  Input,
  Icon,
  Button,
  Autocomplete,
  AutocompleteOption,
} from "@ui-kitten/components";

import { StyleSheet, View } from "react-native";

  const tempData: AutocompleteOption[] = Array.from(new Array(9)).map((i, value) => ({
    title: `FINA 100${value + 1}`
  }));
export const ClassTrackerAdd = () => {

  const [nre, setNRE] = React.useState(null);
  const [course, setCourse] = React.useState(null);

  const renderIcon = style => {
    return <Icon style={style} name="code-outline" />;
  };

  const onChangeText = (query) => {
    // setCourse(query);
    setCourse(tempData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())));
  };

  const trackClass = () => {
    let courseNRE
    // Todo verify if NRE is valid
    if (nre) {
      courseNRE = nre
    } else if (course) {
      // todo find NRE from course //
    }

    // if NRE is valid, add class to tracker, also cliently check for duplicates
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="NRE"
        value={nre}
        onChangeText={setNRE}
        icon={renderIcon}
        style={styles.inputStyle}
      />
      {/* Waiting for https://github.com/akveo/react-native-ui-kitten/issues/800
      <Autocomplete
        placeholder="Find here"
        value={course}
        onChangeText={onChangeText}
        onSelect={setCourse}
        style={styles.inputStyle}
      />*/}

      <View style={styles.footerContainer}>
        <Button style={styles.button} onPress={trackClass}>
          TRACK THIS CLASS
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(248, 249, 253)",
    padding: 16
  },
  inputStyle: {
    paddingBottom: 8
  },
  selectItem: {
    flex: 1,
    height: 100
  },
  footerContainer: {
    width: "100%",
    bottom: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 50,
    width: "100%"
  }
});

export default ClassTrackerAdd;
