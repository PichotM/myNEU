import { ImageSourcePropType } from "react-native";

export const utilities: IUtility[] = [
    {
        title : "Book a room",
        component : "LibraryBooking",
        locked : false,
        icon : require('../assets/icons/magnifying-glass.png')
    },
    {
        title : "Upcoming events",
        component : "Events",
        locked : false,
        icon : require('../assets/icons/earth-grid.png')
    },
    {
        title : "Settings",
        component : "Settings",
        locked : false,
        icon : require('../assets/icons/gear.png')
    },
    {
        title : "Class Tracker",
        component : "ClassTracker",
        locked : false,
        icon : require('../assets/icons/paper.png')
    },
    {
        title : "Schedule",
        component : "Schedule",
        locked : true,
        icon : require('../assets/icons/calendar.png')
    },
    {
        title : "myNEU profile",
        component : "Profile",
        locked : true,
        icon : require('../assets/icons/user.png')
    },
]

interface IUtility {
    title: string,
    component: string,
    locked?: boolean,
    icon: ImageSourcePropType
}