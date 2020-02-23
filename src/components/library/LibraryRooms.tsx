import React, { Component, useState } from "react";

import {
  BottomNavigation,
  BottomNavigationTab,
  Divider
} from "@ui-kitten/components";

import { StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import { RoomItem } from "..";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const LibraryRooms: NavigationStackScreenComponent<any> = () => {
  const [hour, setHour] = useState(16);

  const updateHour = (tabIndex: number) => {
    let newHour = hour + (tabIndex - 2)

    if (newHour < 0) {
      newHour = 23
    } else if (newHour > 24) {
      newHour = 1
    }

    setHour(newHour)
  }

  const formatHour = (hourT: number): string => {
    if (hourT < 0) {
      hourT = 24 + hourT
    } else if (hourT >= 24) {
      hourT = hourT - 24
    }

    return `${hourT}h`
  }

  return (
    <View style={{ flex: 1 }}>
      <BottomNavigation
        selectedIndex={2}
        onSelect={updateHour.bind(this)}>
        <BottomNavigationTab title={formatHour(hour - 2)} />
        <BottomNavigationTab title={formatHour(hour - 1)} />
        <BottomNavigationTab title={formatHour(hour)} />
        <BottomNavigationTab title={formatHour(hour + 1)} />
        <BottomNavigationTab title={formatHour(hour + 2)} />
      </BottomNavigation>
      <Divider />
      <View>
        <RoomItem onPress={() => { console.log('dqsds') }} style={styles.roomItem} title="Room 354 (5 capacity)" value={"from 3:30pm to 5pm"} />
        <RoomItem style={styles.roomItem} title="Room 354 (5 capacity)" value={"from 3:30pm to 5pm"} />
        <RoomItem style={styles.roomItem} title="Room 354 (5 capacity)" value={"from 3:30pm to 5pm"} />
        <RoomItem style={styles.roomItem} title="Room 354 (5 capacity)" value={"from 3:30pm to 5pm"} />
        <RoomItem style={styles.roomItem} title="Room 354 (5 capacity)" value={"from 3:30pm to 5pm"} />
      </View>
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
  roomItem: {
    padding: 14,
  }
});

const mapStateToProps = state => ({
  theme: state.main.theme
});

LibraryRooms.navigationOptions = {
  title: "Rooms available 22/01",
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

export default connect(mapStateToProps, {})(LibraryRooms);
