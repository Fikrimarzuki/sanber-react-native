import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Splash from "./components/Splash";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Message from "./components/Message";
import Profil from "./components/Profil";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="shopping-cart" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="message" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="person" color={color} size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Home" component={TabScreen} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
