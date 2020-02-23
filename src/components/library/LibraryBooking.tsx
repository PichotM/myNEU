import React, { Component, useState } from "react";

import {
  Layout,
  Text,
  Datepicker,
  Select,
  Button,
} from "@ui-kitten/components";

import { StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const LibraryBooking: NavigationStackScreenComponent<any> = (props: any) => {
  const [peopleAmount, setPeopleAmount] = useState();
  const [date, setDate] = useState(new Date());
  const [timeAmount, setTimeAmount] = useState();
  const [hour, setHour] = useState();
  const [floorId, setFloorId] = useState();

  // Select components data
  const timeSelect = [ { text: "15 minutes" }, { text: "30 minutes" }, { text: "45 minutes" }, { text: "1 hour" }, { text: "1 hour and 15 minutes" }, { text: "1 hour and 30 minutes" }, { text: "1 hour and 45 minutes" }, { text: "More or 2 hours" } ]
  const amountSelect = [ { text: "1 person" }, { text: "2 persons" }, { text: "3 persons" }, { text: "4 persons" }, { text: "5 persons" }, { text: "6 persons" }, { text: "+6 persons" } ]
  const snailFloor = [ { text: "Floor one" }, { text: "Floor two" }, { text: "Floor three" }, { text: "Floor four" } ]

  const filter = (date: Date) => date.getTime() >= new Date().getTime() - 1000 * 60 * 60 * 24

    return (
        <View style={{ flex: 1 }}>
          <Layout style={styles.container}>
            <Text style={styles.helpText}>Main search filters (none are mandatory)</Text>
            <Select size='large' placeholder="How many are you?" data={amountSelect} selectedOption={peopleAmount} style={styles.simpleInput} onSelect={(e) => setPeopleAmount(e)} />
            
            <Datepicker
              placeholder='When do you want a room?'
              size='large'
              date={date}
              onSelect={(e) => this.setState({ date : e })}
              filter={filter}
              style={styles.simpleInput}
            />

            <Text style={styles.helpText}>Optionnal search filters</Text>
            <Select size='large' placeholder="How much time?" data={timeSelect} selectedOption={timeAmount} style={styles.simpleInput} onSelect={() => {}} />
            <Select size='large' placeholder="What floor?" data={snailFloor} selectedOption={floorId} style={styles.simpleInput} onSelect={() => {}} />
          </Layout>
          <Layout style={styles.footerContainer}>
            <Button style={styles.button} status='danger' onPress={() => { props.navigation.navigate('LibraryRooms', {}); }}>SORT ROOMS</Button>
            <Button style={styles.button} status='basic' onPress={() => { props.navigation.navigate('Home'); }}>CANCEL</Button>
          </Layout>
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

LibraryBooking.navigationOptions = {
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

export default connect(mapStateToProps, {})(LibraryBooking);
