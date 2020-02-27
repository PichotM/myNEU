import React, { Component } from "react";
import { Text, Icon } from "@ui-kitten/components";
import { StyleSheet, View, ScrollView } from 'react-native'

type Props = { data: any };

// Design inspiration from NUGO
const ScheduleItem: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {/* Course info */}
                <Text style={styles.courseTitle}>HSCI 1106</Text>
                <Text style={styles.courseFullname}>Contemp Issues in Nutrition</Text>
            </View>
            <View style={styles.subContainer}>
                {/* Icon and when */}
                <Icon name='clock-outline' style={styles.icon}/>
                <Text style={styles.iconText}>11:45am - 1:25pm</Text>
            </View>
            <View style={styles.footerContainer}>
                {/* Location */}
                <Icon name='pin-outline' style={styles.icon}/>
                <Text style={styles.iconText}>312 Ell Hall</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: 170,
    textAlign: 'center',
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'transparent'
  },
  headerContainer: {
    flexDirection: 'column',
    backgroundColor: '#9A000D',
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    height: 46,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 8,
      height: 46,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      borderTopWidth: 0,shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,

      elevation: 21,
  },
  courseTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  courseFullname: {
    color: 'white',
    paddingBottom: 4
  },
  iconText: {
    paddingLeft: 8
  },
  icon: {
      width: 24,
      height: 24,
  }
});

export default ScheduleItem;