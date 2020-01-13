import React from 'react';
import { View, ImageProps, Text, ScrollView, Image, Platform } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
  StyleType,
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';
import { ThemeKey } from '../constants/theme';
import { TouchableOpacity } from 'react-native';
import { utilities } from '../constants/utilities';
import { SafeAreaView } from 'react-navigation';

const iconSize = 64

export interface ComponentsListItemData {
    title: string;
    icon?: (style: StyleType, theme: ThemeKey) => React.ReactElement<ImageProps>;
}

interface ComponentProps {
  data: ComponentsListItemData[];
  onItemSelect: (index: number) => void;
  navigation: any;
}

type Props = ThemedComponentProps & ComponentProps;

interface ComponentState {
  pressingButton: number
}

type State = ComponentState

class Component extends React.Component<Props, State> {
  static navigationOptions = {
    title: "myNEU",
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

  private iconRefs = [];

  constructor(props) {
    super(props)

    this.state = {
      pressingButton : -1
    }
  }

  componentDidMount() {
    this.props.navigation.navigate("Settings");
  }

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  private onMenuItemPress = (menuIndex: number) => {
    const menuInfo = utilities[menuIndex]
    if (!menuInfo) return;

    const iconRef = this.iconRefs[menuIndex]
    if (iconRef && !iconRef.isAnimating) {
      // iconRef.current.startAnimation(); // Ugly
    }

    this.props.navigation.navigate(menuInfo.component);
  }

  private populateMenu(first: number, second: number) {
    const { themedStyle, data } = this.props;
    const isLast = first === utilities.length - 1

    return utilities.map((value, key) => {
      if (key == first || key == second) {
        // const iconRef: React.RefObject<Icon<any>> = React.createRef()
        // this.iconRefs.push(iconRef)

        const styleClass = themedStyle["menuItem" + (isLast ? "Last" : (first == key ? "First" : "Second"))]
        return (
          <TouchableOpacity style={styleClass} key={key} onPress={() => { this.onMenuItemPress.bind(this)(key) }}>
            <Image source={value.icon} style={{ width: iconSize, height: iconSize }} />
            <Text style={themedStyle.menuItemTitle}>{value.title}</Text>
          </TouchableOpacity>

        )
      }
    })
  }

  private createMenuContainer() {
    const { themedStyle, data } = this.props;

    return utilities.map((value, key) => {
      if (key % 2 == 0) {
        return (
          <View style={themedStyle.menuParent}>
              {this.populateMenu(key, key + 1)}
          </View>
        )
      } 
    })
  }

  public render(): React.ReactNode {
    const { themedStyle, data } = this.props;

    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.menuContainer}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            {this.createMenuContainer()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const menuItemHeight = 175

export const HomeScreen = withStyles(Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme["background-basic-color-2"],
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }
    })
  },
  menuContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(248, 249, 253)'
  },
  menuParent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  menuItemFirst: {
    marginBottom: 16,
    height: menuItemHeight,
    width: '40%',
    flex: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  menuItemSecond: {
    marginBottom: 16,
    height: menuItemHeight,
    flex: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  menuItemLast: {
    height: menuItemHeight,
    flex: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuItemTitle: {
    paddingTop: 14,
    fontSize: 14,
    color: "black",
    textAlignVertical: 'bottom'
  }
}));