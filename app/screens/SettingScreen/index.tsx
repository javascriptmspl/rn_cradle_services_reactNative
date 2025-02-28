import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import Entypo from "react-native-vector-icons/Entypo";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

type RowProps = {
  text: string;
  icon?: () => React.ReactNode;
  onPress?: () => void;
};

const Row = ({ text, icon, onPress }: RowProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 5,
          borderRadius: 10,
          paddingVertical: 10,
          paddingLeft: 10,
          borderWidth: 1,
          borderColor: "lightgray",
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 2.54,
          elevation: 2,
          backgroundColor: "white",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            width: 33,
            height: 33,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "lightgray",
            // shadowColor: "#000000",
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.17,
            // shadowRadius: 2.54,
            // elevation: 2,
            borderRadius: 5,
            backgroundColor: "white",
          }}
        >
          {icon && icon()}
        </View>
        <Text style={{ flex: 1, color: "black", fontWeight: "600" }}>
          {text}
        </Text>
        <Entypo name="chevron-small-right" color="lightgray" size={30} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const SettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout title="Settings" onBack={navigation.goBack}>
      <View style={{ flex: 1, marginHorizontal: 20, paddingTop:20 }}>
        <Row
          icon={() => (
            <SimpleLineIcons name="globe" size={20} color="lightgray" />
          )}
          onPress={() => navigation.navigate("Language")}
          text="Language"
        />

        <Row
          icon={() => (
            <SimpleLineIcons name="location-pin" size={20} color="lightgray" />
          )}
          onPress={() => navigation.navigate("CountryRegion")}
          text="Country & Region"
        />
      </View>
    </MainLayout>
  );
};

export default SettingScreen;
