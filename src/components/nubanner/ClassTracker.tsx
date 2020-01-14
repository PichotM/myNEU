import React, { Component } from "react";

import {
  Layout,
  Toggle,
  Select,
  SelectOption,
  Divider,
  Text,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { ThemeKey } from "../../constants/theme";
import { ClassTrackerAdd } from "./ClassTrackerAdd";

const BottomNavigationClassTracker = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(props.currentFrame);

  React.useEffect(() => {
    props.onChange(selectedIndex)
  }, [selectedIndex]);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}>
      <BottomNavigationTab title='Tracked'/>
      <BottomNavigationTab title='Add tracker'/>
    </BottomNavigation>
  );
};

type Props = {
  theme: ThemeKey;
  navigation: any;
  classes: any[];
};

type State = {
  currentFrame: number
};

class NUBanner extends Component<Props, State> {
  static navigationOptions = {
    title: "Class Tracker",
    headerStyle: {
      backgroundColor: "#9A000D"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      alignSelf: "center",
      textAlign: "center"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      currentFrame : 0
    };
  }

  private getTrackedClasses() {
    const { classes } = this.props

    return classes.map((value, key) => {
      return (
        <React.Fragment>
          <TouchableOpacity style={styles.trackCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{value.name}</Text>
              <Text style={styles.cardNRE}>{value.nre}</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardSeats}>{`${value.seatsAvailable} seat(s) available`}</Text>
            </View>
          </TouchableOpacity>
          <Divider />
        </React.Fragment>
      )
    })
  }

  render() {
    console.log(this.props.classes)
    return (
      <View style={styles.container}>
        {this.state.currentFrame === 1 ? <ClassTrackerAdd /> : (!this.props.classes || this.props.classes.length === 0) ? (
          <View style={styles.emptyTextContainer}>
            <Text style={styles.emptyText}>You are not tracking any classes.</Text>
          </View>
        ) : (
          <ScrollView>
            { this.getTrackedClasses() }
          </ScrollView>
        )}
        <BottomNavigationClassTracker currentFrame={this.state.currentFrame} onChange={(e) => this.setState({ currentFrame : e })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(248, 249, 253)",
  },
  emptyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    color: 'rgb(180, 180, 180)',
  },
  trackCard: {
    backgroundColor: 'white',
    height: 80
  },
  cardHeader: {
    paddingTop: 14,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardInfo: {
    paddingLeft: 16,
  },
  cardName: {
    fontSize: 24,
    lineHeight: 28
  },
  cardNRE: {
    paddingRight: 16,
    color: "gray"
  },
  cardSeats: {
    paddingTop: 4,
    color: "gray"
  }
});

const mapStateToProps = state => ({
  //classes: state.classtracker.classes
  classes: [
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
    { name : 'FINA 4301', maxSeats: 40, seatsAvailable: 0, nre : '45566' },
  ]
});

export default connect(mapStateToProps, {})(NUBanner);
