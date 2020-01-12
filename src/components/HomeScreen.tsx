import React, {Component} from 'react';

import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { HomeMenuContainer, ComponentsListItemData } from './menu/HomeMenuContainer';

const menus: ComponentsListItemData[] = [
  { title : "Salut" }
]

type Props = {};
export default class HomeScreen extends Component <Props> {
  private onItemSelect() {

  }

  render() {
    return (
      <HomeMenuContainer data={menus} onItemSelect={this.onItemSelect.bind(this)}>
      </HomeMenuContainer>
    );
  }
}

// <Text style={{ color: "black" }}>Hello world.</Text>