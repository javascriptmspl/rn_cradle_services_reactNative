import React, { useEffect } from "react";
import { Dimensions, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { COLORS } from "../styles";
import { TabNavigatorParams } from "./types";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ExploreStack from "./ExploreStack";
import TabBarShape from "../../assets/icon/tabbar.svg";
import AddStack from "./AddStack";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ChatStack from "./ChatStack";
import { RootState } from "../redux";
import { useSelector } from "react-redux";
import BookingStack from "./BookingStack";

const Tab = createBottomTabNavigator<TabNavigatorParams>();

// @ts-ignore
export const HideTabContext = React.createContext();
const MainTabNavigator = () => {
  const [hideTab, setHideTab] = React.useState(false);
  const width = Dimensions.get("window").width;
  const mode = useSelector((s: RootState) => s.auth.mode);

  const isAppMode = mode === "Consumer";

  return (
    <HideTabContext.Provider value={{ hideTab, setHideTab }}>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            height: 70,
            borderColor: COLORS.transparent,
            borderWidth: 0,
            opacity: hideTab ? 0 : 1,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          tabBarShowLabel: false,
          tabBarBackground: () => {
            return (
              <View
                style={{
                  position: "absolute",
                  zIndex: 1,
                  bottom: -10,
                  backgroundColor: "transparent",
                }}
              >
                {!isAppMode && <TabBarShape width={width} />}
                {/* <Image style={{width:'100%', height:100}} source={require('../../assets/icon/Subtract.png')}/> */}
              </View>
            );
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({ focused }) => {
              return (
                <Feather
                  name="home"
                  size={28}
                  color={focused ? COLORS.primary : "lightgray"}
                />
              );
            },
          }}
          name="HomeTab"
          component={HomeStack}
        />

        {!isAppMode ? (
          <Tab.Screen
            name="BookingTab"
            component={BookingStack}
            options={({ route }) => ({
              tabBarActiveTintColor: COLORS.primary,
              tabBarIcon: ({ focused }) => (
               
                <MaterialCommunityIcons
                name="card-bulleted-outline"
                size={33}
                color={focused ? COLORS.primary : "lightgray"}
              />
              ),
            })}
          />
        ) : (
          <Tab.Screen
            name="ExploreTab"
            component={ExploreStack}
            options={({ route }) => ({
              tabBarActiveTintColor: COLORS.primary,
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name={"hearto"}
                  size={25}
                  color={focused ? COLORS.primary : "lightgray"}
                />
              ),
            })}
          />
        )}

        {!isAppMode && (
          <Tab.Screen
            options={{
              tabBarLabel: "",
              tabBarActiveTintColor: COLORS.primary,
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{
                      position: "absolute",
                      backgroundColor: COLORS.primary,
                      top: -20,
                      width: 60,
                      height: 60,
                      borderRadius: 55,
                      justifyContent: "center",
                      alignItems: "center",
                      borderWidth: 2,
                      borderColor: COLORS.primary,
                    }}
                  >
                    <MaterialIcons name="add" size={35} color={COLORS.white} />
                  </View>
                );
              },
            }}
            name="AddTab"
            component={AddStack}
          />
        )}

        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({ focused }) => {
              return (
                //   <React.Fragment>
                //   {focused ? <LocationOn/> : <LocationOff/>}
                // </React.Fragment>
                <Feather
                  name="mail"
                  size={28}
                  color={focused ? COLORS.primary : "lightgray"}
                />
              );
            },
          }}
          name="ChatTab"
          component={ChatStack}
        />

        <Tab.Screen
          options={{
            tabBarLabel: "",
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({ focused }) => {
              return (
                <AntDesign
                  name="user"
                  size={28}
                  color={focused ? COLORS.primary : "lightgray"}
                />
              );
            },
          }}
          name="ProfileTab"
          component={ProfileStack}
        />
      </Tab.Navigator>
    </HideTabContext.Provider>
  );
};

export default MainTabNavigator;

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    backgroundColor: "white",
    borderColor: COLORS.transparent,
    borderWidth: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
