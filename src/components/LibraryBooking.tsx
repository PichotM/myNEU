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
} from "@ui-kitten/components";

import { StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import { ThemeKey } from "../constants/theme";
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  theme: ThemeKey;
  navigation: any;
};

type State = {
  peopleAmount?: SelectOption,
  timeAmount?: SelectOption,
  date?: Date,
  floorId?: SelectOption,
  hour?: Date,
}

class LibraryBooking extends Component<Props, State> {
  static navigationOptions = {
    title: "Book a room",
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

  // Select components data
  private timeSelect = [ { text: "15 minutes" }, { text: "30 minutes" }, { text: "45 minutes" }, { text: "1 hour" }, { text: "1 hour and 15 minutes" }, { text: "1 hour and 30 minutes" }, { text: "1 hour and 45 minutes" }, { text: "More or 2 hours" } ]
  private amountSelect = [ { text: "1 person" }, { text: "2 persons" }, { text: "3 persons" }, { text: "4 persons" }, { text: "5 persons" }, { text: "6 persons" }, { text: "+6 persons" } ]
  private snailFloor = [ { text: "Floor one" }, { text: "Floor two" }, { text: "Floor three" }, { text: "Floor four" } ]

  constructor(props) {
      super(props)

      this.state = {
        hour : new Date()
      }
  }

  async componentDidMount() {
    const response: any = await fetch('https://neu.campuslabs.com/engage/api/discovery/event/search?endsAfter=2020-01-13T15%3A27%3A11-05%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query=').catch(err => { console.log('Error: ', err) })
    
    if (response) {
        const eventData = await response.json()
        if (eventData.value && eventData.value.length > 0) {
        }
    }
  }

  private filter = (date: Date) => date.getTime() >= new Date().getTime() - 1000 * 60 * 60 * 24

  render() {
    return (
        <View style={{ flex: 1 }}>
          <Layout style={styles.container}>
            <Text style={styles.helpText}>Main search filters (none are mandatory)</Text>
            <Select size='large' placeholder="How many are you?" data={this.amountSelect} selectedOption={this.state.peopleAmount} style={styles.simpleInput} onSelect={(e) => this.setState({ peopleAmount : e })} />
            
            <Datepicker
              placeholder='When do you want a room?'
              size='large'
              date={this.state.date}
              onSelect={(e) => this.setState({ date : e })}
              filter={this.filter}
              style={styles.simpleInput}
            />

            <Text style={styles.helpText}>Optionnal search filters</Text>
            <Select size='large' placeholder="How much time?" data={this.timeSelect} selectedOption={this.state.timeAmount} style={styles.simpleInput} onSelect={() => {}} />
            <Select size='large' placeholder="What floor?" data={this.snailFloor} selectedOption={this.state.floorId} style={styles.simpleInput} onSelect={() => {}} />
          </Layout>
          <Layout style={styles.footerContainer}>
            <Button style={styles.button} status='danger' onPress={() => { this.props.navigation.navigate('LibraryRooms', this.state); }}>SORT ROOMS</Button>
            <Button style={styles.button} status='basic' onPress={() => { this.props.navigation.navigate('Home'); }}>CANCEL</Button>
          </Layout>
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
  button: {
    marginVertical: 4,
    width: '96%',
    marginHorizontal: 4,
    height: 50
  },
  selectContainer: {
    flex: 1,
    flexDirection: "row",
  },
  footerContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  helpText: {
    color: 'rgb(145, 150, 180)',
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingLeft: 22,
    paddingBottom: 8
  },
  simpleInput: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
  }
});

const mapStateToProps = state => ({
  theme: state.main.theme
});

export default connect(mapStateToProps, {})(LibraryBooking);
