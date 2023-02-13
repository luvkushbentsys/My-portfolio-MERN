import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Project from "./screens/Project";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
        headerStatusBarHeight:5,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
            color: "yellowgreen",
          },
          tabBarStyle: { backgroundColor: "black",height:60 },
          tabBarColor: "black",
          tabBarActiveTintColor: "yellowgreen",
          tabBarTintColor: "black",
        }}
      >
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color="yellowgreen" size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="PROJECT"
          component={Project}
          options={{
            tabBarLabel: "project",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="application" color="yellowgreen" size={28} />
            ),
          }}
        />

        <Tab.Screen
          name="CONTACT"
          component={Contact}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="phone" color="yellowgreen" size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="ABOUT"
          component={About}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color="yellowgreen" size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
