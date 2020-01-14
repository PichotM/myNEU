import React, { Component } from "react";

import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry
} from "@ui-kitten/components";

import { StyleSheet } from 'react-native'
import { connect } from "react-redux";
import { ThemeKey } from "../constants/theme";
import { View } from "react-native";

// Reverse engineering :o
interface IEvent {
    "@search.score": number,
    benefitNames: string[],
    brandId: number,
    brandIds: number[],
    categoryIds: number[],
    categoryNames: string[],
    description: string,
    endsOn: string,
    id: string,
    imagePath?: string,
    institutionId: number,
    latitute: string,
    location: string,
    longitute: string,
    name: string,
    organizationId: number,
    organizationIds: number[],
    organizationName: string,
    organizationNames: string[],
    organizationProfilePicture: string,
    startsOn: string,
    status: string,
    theme: string,
    visibility: string,
}

type Props = {
  theme: ThemeKey;
  navigation: any;
};

type State = {
    events: IEvent[]
}

class Events extends Component<Props, State> {
  static navigationOptions = {
    title: "Events",
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

      this.state = {
          events : []
      }
  }

  async componentDidMount() {
    const response: any = await fetch('https://neu.campuslabs.com/engage/api/discovery/event/search?endsAfter=2020-01-13T15%3A27%3A11-05%3A00&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=15&query=').catch(err => { console.log('Error: ', err) })
    
    if (response) {
        const eventData = await response.json()
        if (eventData.value && eventData.value.length > 0) {
            this.setState({ events : eventData.value })
        }
    }
  }

  render() {
    return (
        <Text style={{ padding: 16 }}>Coming soon!</Text>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.main.theme
});

export default connect(mapStateToProps, {})(Events);
