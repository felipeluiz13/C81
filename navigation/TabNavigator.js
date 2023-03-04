import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { Component } from "react";
import Feed from "../screens/feed";
import CreatePost from "../screens/createPost";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screensOptions={({ route }) => ({
        tabBarIcon: ({ focoused, color, size }) => {
          let IconName;
          if (route.name === "Feed") {
            icooName = focoused ? "book" : "book-outline";
          } else if (route.name === "CreatePost") {
            iconName = focoused ? "create" : "create-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintCOlor: "gray",
      }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Criar Post" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
