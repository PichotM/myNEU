import React, { Component, useState } from "react";

import {
  Layout,
  Toggle,
  Select,
  SelectOption,
  Divider,
} from "@ui-kitten/components";

import { StyleSheet, View, ScrollView } from 'react-native'
import { connect } from "react-redux";
import { ThemeKey } from "../../constants/theme";
import ScheduleItem from "./ScheduleItem";
import { NavigationStackScreenProps, NavigationStackScreenComponent } from "react-navigation-stack";

// TODO settings reducer only?
const Schedule: NavigationStackScreenComponent = (props: any) => {
  const [day, setDay] = useState(this.dayOfWeek[0])
  const dayOfWeek = [{ text: "Monday" }, { text: "Tuesday" }, { text: "Wednesday" }, { text: "Thursday" }, { text: "Friday" }, { text: "Saturday" }, { text: "Sunday" }]

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Select size='large' data={dayOfWeek} selectedOption={day} style={styles.simpleInput} onSelect={(e) => setDay(e)} />
      </View>

      <Divider />

      <ScrollView style={{ flex: 1, backgroundColor: 'rgb(248, 249, 253)' }}>
        <ScheduleItem data={{}} />
        <ScheduleItem data={{}} />
        <ScheduleItem data={{}} />
        <ScheduleItem data={{}} />
        <ScheduleItem data={{}} />
        <ScheduleItem data={{}} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'column',
    paddingTop: 16
  },
  simpleInput: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
  },
  selectContainer: {
    paddingBottom: 8
  }
});

const mapStateToProps = state => ({
  theme: state.main.theme
});

Schedule.navigationOptions = {
  title: "Schedule",
  headerStyle: {
    backgroundColor: "#9A000D",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    alignSelf: 'center',
    textAlign: 'center',
  }
};

export default connect(mapStateToProps, {})(Schedule);
