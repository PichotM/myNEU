import React, { Component } from "react";

import {
  Layout,
  Toggle,
} from "@ui-kitten/components";

import { StyleSheet, View } from 'react-native'
import { connect } from "react-redux";
import { SettingItem } from "./SettingItem";
import { NavigationStackScreenProps, NavigationStackScreenComponent } from "react-navigation-stack";

interface ISettingsProps extends NavigationStackScreenProps {}

const Settings: NavigationStackScreenComponent<ISettingsProps> = (props: ISettingsProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Layout style={styles.settingContainer}>
        <SettingItem
          style={styles.setting}
          hint='Edit Profile'
        />
        <SettingItem
          style={styles.setting}
          hint='Change Password'
        />
        <SettingItem
          style={styles.setting}
          hint='Notification'
        />
        <SettingItem
          style={styles.setting}
          hint='Privacy'
        />
        <SettingItem
          style={styles.setting}
          hint='Sound Enabled'
          onPress={() => { }}>
          <Toggle
            checked={true}
            onChange={() => { }}
          />
        </SettingItem>
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
  settingContainer: {
    flex: 1,
  },
  setting: {
    padding: 16,
  },
  section: {
    paddingTop: 32,
  },
});

const mapStateToProps = state => ({
  theme: state.main.theme
});

Settings.navigationOptions = {
  title: "Settings",
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

export default connect(mapStateToProps, {})(Settings);
