import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileItem } from "./ProfileItem";
import { NavigationStackScreenComponent, NavigationStackScreenProps } from "react-navigation-stack";

interface ISettingsProps extends NavigationStackScreenProps {}
const Profile: NavigationStackScreenComponent<ISettingsProps> = (props: ISettingsProps) => {

    return (
      <View style={styles.container}>
        <ProfileAvatar
          style={styles.profileAvatar}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Robespierre.jpg/220px-Robespierre.jpg' }}
        />
        <ProfileItem
          style={[styles.profileSetting, styles.section]}
          hint="First Name"
          value={"Maximilien"}
        />
        <ProfileItem
          style={styles.profileSetting}
          hint="Last Name"
          value={"de Robespierre"}
        />
        <ProfileItem
          style={styles.profileSetting}
          hint="Gender"
          value={"Male"}
        />
        <ProfileItem
          style={styles.profileSetting}
          hint="Age"
          value={`36`}
        />
        <ProfileItem
          style={[styles.profileSetting, styles.section]}
          hint="Email"
          value={"contact@email.com"}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248, 249, 253)',
    paddingTop: 32,
  },
  profileAvatar: {
    aspectRatio: 1.0,
    height: 124,
    alignSelf: "center"
  },
  editAvatarButton: {
    aspectRatio: 1.0,
    height: 48,
    borderRadius: 24
  },
  profileSetting: {
    padding: 16
  },
  section: {
    marginTop: 24
  },
  doneButton: {
    margin: 24
  }
});

const mapStateToProps = state => ({
  theme: state.main.theme
});

Profile.navigationOptions = {
  title: "My profile",
  headerStyle: {
    backgroundColor: "black"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center"
  }
};

export default connect(mapStateToProps, {})(Profile);
