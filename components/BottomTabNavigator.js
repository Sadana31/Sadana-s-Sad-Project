import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import dummy1 from "../screens/dummy1"
import dummy2 from "../screens/dummy2"

export const BottomTabNavigator = createBottomTabNavigator({
    dummy1:{
        screen: dummy1,
        navigationOptions: {
            tabBarLabel: "TEAM"
        }
    },
    dummy2:{
        screen: dummy2,
        navigationOptions: {
            tabBarLabel: "MATCH"
        }
    }
})
