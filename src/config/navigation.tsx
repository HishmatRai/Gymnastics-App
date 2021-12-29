import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Home from "_screens/home";
import Challenges from "_screens/challenges";
import Search from "_screens/search";
import Community from "_screens/community";
import MyNotes from "_screens/notes";
import Details from "_screens/details";
import MyNoteTitle from "_screens/mynotes";
import Entypo from "react-native-vector-icons/dist/Entypo";
import AntDesign from "react-native-vector-icons/dist/AntDesign";
import Feather from "react-native-vector-icons/dist/Feather";
import CommunityTab from "_components/CommunityTab";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import colors from "../../colors";
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        showLabel: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? (
              <Entypo name="home" size={30} color={colors.active} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color={colors.white}
              />
            );
          } else if (route.name === "Challenges") {
            iconName = focused ? (
              <AntDesign name="star" size={30} color={colors.active} />
            ) : (
              <AntDesign name="staro" size={30} color={colors.white} />
            );
          } else if (route.name === "Search") {
            iconName = focused ? (
              <Feather name="search" size={30} color={colors.active} />
            ) : (
              <Feather name="search" size={30} color={colors.white} />
            );
          } else if (route.name === "Community") {
            iconName = focused ? (
              <Feather name="users" size={30} color={colors.active} />
            ) : (
              <Feather name="users" size={30} color={colors.white} />
            );
          } else if (route.name === "MyNotes") {
            iconName = focused ? (
              <Feather name="shopping-bag" size={30} color={colors.active} />
            ) : (
              <Feather name="shopping-bag" size={30} color={colors.white} />
            );
          }

          // You can return any component that you like here!
          return iconName;
        },
        tabBarStyle: { backgroundColor: colors.primary, height: 83 },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challenges" component={Challenges} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="MyNotes" component={MyNotes} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="MyNoteTitle"
          component={MyNoteTitle}
          options={{ headerShown: false }}
        />
         <Tab.Screen
          name="CommunityTab"
          component={CommunityTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
