// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import HomeScreen from './screens/home_screen';
import {BottomTabNavigator} from './components/BottomTabNavigator';

export default function App() {
  return (
    <AppContainer />
  )
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  BottomTab: {screen: BottomTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)