import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import AboutScreen from "./AboutScreen";
import SkillScreen from "./SkillScreen";
import ProjectScreen from "./ProjectScreen";
import AddScreen from "./AddScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName="About">
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Tab" component={TabScreen} />
    </Drawer.Navigator>
  )
}

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Skill"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Skill"
        component={SkillScreen}
        options={{
          tabBarLabel: "Skill",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="build" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="Project"
        component={ProjectScreen}
        options={{
          tabBarLabel: "Project",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="folder" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="add" color={color} size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
