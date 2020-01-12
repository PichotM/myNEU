import React from 'react';
import { View, ImageProps, Text } from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
  StyleType,
} from '@ui-kitten/components';
import { ThemeKey } from '../../constants/theme';

export interface ComponentsListItemData {
    title: string;
    icon?: (style: StyleType, theme: ThemeKey) => React.ReactElement<ImageProps>;
}

interface ComponentProps {
  data: ComponentsListItemData[];
  onItemSelect: (index: number) => void;
}

type Props = ThemedComponentProps & ComponentProps;

class Component extends React.Component<Props> {

  private onItemPress = (index: number) => {
    this.props.onItemSelect(index);
  };

  public render(): React.ReactNode {
    const { themedStyle, data } = this.props;

    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.contentContainer}>
            <Text>Hello there.</Text>
        </View>
      </View>
    );
  }
}

export const HomeMenuContainer = withStyles(Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-2'],
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
}));