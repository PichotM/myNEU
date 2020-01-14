import React, { Component } from "react";

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

// TODO settings reducer only?

type Props = {
  theme: ThemeKey;
  navigation: any;
};

type State = {
    selectedDay: SelectOption
}

class Schedule extends Component<Props, State> {
  static navigationOptions = {
    title: "Schedule",
    headerStyle: {
      backgroundColor: "#9A000D",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      alignSelf:'center',
      textAlign: 'center',
    }
  };

  private dayOfWeek = [ { text : "Monday" }, { text : "Tuesday" }, { text : "Wednesday" }, { text : "Thursday" }, { text : "Friday" }, { text : "Saturday" }, { text : "Sunday" } ] 

  constructor(props) {
      super(props)

      this.state  = {
          selectedDay : this.dayOfWeek[0]
      }
  }

  async componentDidMount() {
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.selectContainer}>
                <Select size='large' data={this.dayOfWeek} selectedOption={this.state.selectedDay} style={styles.simpleInput} onSelect={(e) => this.setState({ selectedDay : e })} />
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

export default connect(mapStateToProps, {})(Schedule);
