import React, { Component, useState } from "react";

import {
  Divider,
  Text,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { ThemeKey } from "../../constants/theme";
import ClassTrackerAdd from "./ClassTrackerAdd";
import { TrackedClass } from "../../models/TrackedClass";
import { NavigationStackScreenProps, NavigationStackScreenComponent } from "react-navigation-stack";

const BottomNavigationClassTracker = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(props.currentFrame);

  React.useEffect(() => {
    props.onChange(selectedIndex)
  }, [selectedIndex]);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}>
      <BottomNavigationTab title='Tracked' />
      <BottomNavigationTab title='Add tracker' />
    </BottomNavigation>
  );
};

// TODO switch to hooks
interface ISettingsProps extends NavigationStackScreenProps {
  classes: TrackedClass[]
}

const NUBanner: NavigationStackScreenComponent<any> = (props: ISettingsProps) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const getTrackedClasses = () => {
    const { classes } = props

    return classes.map((value, key) => {
      return (
        <React.Fragment key={key}>
          <TouchableOpacity style={styles.trackCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardName}>{value.name}</Text>
              <Text style={styles.cardNRE}>{String(value.nre)}</Text>
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

  return (
    <View style={styles.container}>
      {currentFrame === 1 ? <ClassTrackerAdd /> : (!props.classes || props.classes.length === 0) ? (
        <View style={styles.emptyTextContainer}>
          <Text style={styles.emptyText}>You are not tracking any classes.</Text>
        </View>
      ) : (
          <ScrollView>
            {this.getTrackedClasses()}
          </ScrollView>
        )}
      <BottomNavigationClassTracker currentFrame={currentFrame} onChange={(e) => setCurrentFrame(e)} />
    </View>
  );
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
  classes: state.classtracker.classes
});

NUBanner.navigationOptions = {
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

export default connect(mapStateToProps, {})(NUBanner);
