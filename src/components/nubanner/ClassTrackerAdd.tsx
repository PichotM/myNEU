import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';

import {
  Input,
  Icon,
  Button,
  Autocomplete,
  AutocompleteOption,
} from "@ui-kitten/components";

import { StyleSheet, View } from "react-native";
import { addTrackedClass, IAddTrackedClass } from "../../redux/action/classtracker";
import { TrackedClass } from "../../models/TrackedClass";

const tempData: AutocompleteOption[] = Array.from(new Array(9)).map((i, value) => ({
  title: `FINA 100${value + 1}`
}));

interface IClassTrackerAddProps {
  classes: TrackedClass[],
  addTrackedClass: (trackedClass: TrackedClass) => IAddTrackedClass
}

// Test NRE 30581
const ClassTrackerAdd = (props: IClassTrackerAddProps) => {
  const [nre, setNRE] = React.useState("30581");
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
    if (nre) {
      courseNRE = nre
    } else if (course) {
      // todo find NRE from course //
    }

    // Notification NRE not valid?
    if (!courseNRE) return;
    // Check if the NRE is valid
    axios({
      method: 'post',
      url: `https://nubanner.neu.edu/StudentRegistrationSsb/ssb/searchResults/getClassDetails?term=${202030}&courseReferenceNumber=${courseNRE}&first=first`
    })
    .then((response) => {
      const rawResponse = response
      if (rawResponse && rawResponse.status === 200) {
        const newClass = new TrackedClass(courseNRE)
        const index = props.classes.findIndex((e) => e.nre === courseNRE)
        if (index === -1) {
          const cleanText = rawResponse.data.replace(/<[^>]*>?/gm, '');
          const lines = cleanText.split(/\r?\n/);
          lines.forEach((element, i) => {
              if (element) {
                const div = element.split(':')
                console.log(i, div)
              }
          });

          props.addTrackedClass(newClass)
        }
      }
    }, (error) => {
      console.log(error);
    });
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

const mapStateToProps = state => ({
  classes: state.classtracker.classes
});

export default connect(mapStateToProps, { addTrackedClass: addTrackedClass })(ClassTrackerAdd);

