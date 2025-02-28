import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { TitleText } from "../../components/MyText";
import { COLORS } from "../../styles";
import Active from "./Active";
import Completed from "./Completed";
import Cancelled from "./Cancelled";


const BookingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [view, setView] = useState(1);

  return (
    <MainLayout onBack={navigation.goBack} title="Booking History">
      <View style={{ flex: 1,marginHorizontal: 20, }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom:20
          }}
        >
          <TouchableOpacity
            onPress={() => setView(1)}
            style={[
              styles.container,
              { backgroundColor: view == 1 ? COLORS.primary : "white" },
            ]}
          >
            <TitleText bold style={{ color: view == 1 ? "white" : "black" }}>Active</TitleText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setView(2)} 
           style={[
            styles.container,
            { backgroundColor: view == 2 ? COLORS.primary : "white" },
          ]}>
            <TitleText bold style={{ color: view == 2 ? "white" : "black" }}>Completed</TitleText>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setView(3)} 
           style={[
            styles.container,
            { backgroundColor: view == 3 ? COLORS.primary : "white" },
          ]}>
            <TitleText bold style={{ color: view == 3 ? "white" : "black" }}>Cancelled</TitleText>
          </TouchableOpacity>
        </View>

        {view == 1 && <Active />}
        {view == 2 && <Completed />}
        {view == 3 && <Cancelled />}
      </View>
    </MainLayout>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
