/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Home from './src/Home';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Store from './src/redux/Store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/Profile';
import Tags from './src/Tags';
import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons"
const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: "#000000",
            tabBarIcon: () => <Foundation name="home" size={30} color={"#000000"} />
          }} />
          <Tab.Screen name="Tags" component={Tags} options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: "#000000",
            tabBarIcon: () => <Feather name="bookmark" size={30} color={"#000000"} />
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: "#000000",
            tabBarIcon: () => <Ionicons name="person-circle-outline" size={30} color={"#000000"} />
          }}
          />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
