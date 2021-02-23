import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { auth } from "../fb";
import useUser from "hooks/useUser";

import Home from "./Home";
import Learn from "./Learn";
import Settings from "./Settings";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  useUser();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#F59E0B",
        inactiveTintColor: "#E7E5E4",
        activeBackgroundColor: "#44403C",
        inactiveBackgroundColor: "#44403C",
        labelStyle: {
          fontWeight: "bold",
        },
        style: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarLabel: "Learn",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="brain"
              size={size + 3}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
