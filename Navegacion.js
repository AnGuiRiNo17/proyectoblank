import React, { Profiler } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";

//llamar a las pantallas principales

import ScreenAcercaDe from "./screen/about/ScreenAcercaDe";
import ScreenHome from "./screen/home/ScreenHome";
import ScreenSetting from "./screen/setting/ScreenSetting";

const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={ScreenHome}
        options={{
          title: "Menu",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          tabBarLabelPosition: "beside-icon",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "red",
          },
        }}
      />

      <Tab.Screen
        name="about"
        component={ScreenAcercaDe}
        options={{
          title: "About",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
          tabBarLabelPosition: "beside-icon",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "red",
          },
        }}
      />

      <Tab.Screen
        name="setting"
        component={ScreenSetting}
        options={{
          title: "configuracion",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={24} color={color} />
          ),
          tabBarLabelPosition: "beside-icon",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "red",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return <Mytabs />;
}
