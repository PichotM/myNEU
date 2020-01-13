import React from 'react';
import { StyleSheet, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Divider, Layout, Text } from '@ui-kitten/components';

export interface ProfileSettingProps extends TouchableOpacityProps {
  title: string;
  value: string;
}

export const RoomItem = (props: ProfileSettingProps): React.ReactElement => {

  const { style, title, value, ...layoutProps } = props;

  return (
    <React.Fragment>
      <TouchableOpacity
        {...layoutProps}
        style={[styles.container, style]}>
        <Text
          category='s1'>
          {title}
        </Text>
        <Text category='s1' appearance='hint' style={{ fontSize: 12 }}>
          {value}
        </Text>
      </TouchableOpacity>
      <Divider/>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});