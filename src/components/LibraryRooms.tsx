import React, { Component } from "react";

import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
  Input,
  Datepicker,
  Select,
  Button,
  Icon,
  SelectOption,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";

import { StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import { ThemeKey } from "../constants/theme";
import { RoomItem } from ".";

type Props = {
  theme: ThemeKey;
  navigation: any;
};

type State = {
    hour : number
}

class LibraryRooms extends Component<Props, State> {
  static navigationOptions = {
    title: "Rooms available",
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

  constructor(props) {
      super(props)

      this.state  = {
          hour : 16
      }
  }

  async componentDidMount() {
  }

  private formatHour(hour: number): string {
      return `${hour}h`
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation
            selectedIndex={2}
            onSelect={() => {}}>
                <BottomNavigationTab title={this.formatHour(this.state.hour - 2)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour - 1)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour + 1)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour + 2)}/>
            </BottomNavigation>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    flexDirection: 'column',
    paddingTop: 16
  },
  roomItem: {
    padding: 16,
  }
});

const mapStateToProps = state => ({
  theme: state.main.theme
});

export default connect(mapStateToProps, {})(LibraryRooms);
