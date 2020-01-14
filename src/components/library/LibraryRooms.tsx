import React, { Component } from "react";

import {
  BottomNavigation,
  BottomNavigationTab,
  Text,
  Divider
} from "@ui-kitten/components";

import { StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import { ThemeKey } from "../../constants/theme";
import { RoomItem } from "..";

type Props = {
  theme: ThemeKey;
  navigation: any;
};

type State = {
    hour : number
}

class LibraryRooms extends Component<Props, State> {
  static navigationOptions = {
    title: "Rooms available 22/01",
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

  private updateHour(tabIndex: number) {
    let newHour = this.state.hour + (tabIndex - 2)

    if (newHour < 0) {
      newHour = 23
    } else if (newHour > 24) {
      newHour = 1
    }

    this.setState({ hour : newHour })
  }

  private formatHour(hour: number): string {
    if (hour < 0) {
      hour = 24 + hour
    } else if (hour >= 24) {
      hour = hour - 24
    }
  
      return `${hour}h`
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation
            selectedIndex={2}
            onSelect={this.updateHour.bind(this)}>
                <BottomNavigationTab title={this.formatHour(this.state.hour - 2)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour - 1)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour + 1)}/>
                <BottomNavigationTab title={this.formatHour(this.state.hour + 2)}/>
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

export default connect(mapStateToProps, {})(LibraryRooms);
