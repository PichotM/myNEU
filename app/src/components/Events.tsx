import React, { Component, useState, useEffect } from "react";

import {
  Text,
} from "@ui-kitten/components";

import { connect } from "react-redux";
import { ThemeKey } from "../constants/theme";
import { NavigationStackScreenComponent } from "react-navigation-stack";

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

type State = {
  events: IEvent[]
}

const Events: NavigationStackScreenComponent = (props: any) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
  }, [])

  return (
    <Text style={{ padding: 16 }}>Coming soon!</Text>
  )
}

const mapStateToProps = state => ({
  theme: state.main.theme
});

Events.navigationOptions = {
  title: "Events",
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

export default connect(mapStateToProps, {})(Events);
