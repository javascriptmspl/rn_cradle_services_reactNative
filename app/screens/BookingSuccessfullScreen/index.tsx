import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import { MediumText, Text25, TitleText } from "../../components/MyText";
import Icon from "../../../assets/images/svg/bookingSuccess.svg";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParams } from "../../navigation/types";

const BookingSuccessfullScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon style={{ alignSelf: "center" }} />
        <View
          style={{
            padding: 20,
            backgroundColor: "white",
            borderRadius: 15,
            width: "90%",
            paddingVertical: 30,
            marginTop: 30,
          }}
        >
          <Text25 bold style={{ alignSelf: "center", marginBottom: 5 }}>
            Booking successfull
          </Text25>
          <MediumText bold style={styles.grayText}>
            We will start work on time
          </MediumText>
          <MediumText bold style={styles.grayText}>
            Thank you!
          </MediumText>
          <PrimaryBtn
            onPress={() => {
              //@ts-ignore
              navigation.navigate("Booking");
            }}
            text="View Booking"
            containerStyle={{ marginTop: 20 }}
          />

          <PrimaryBtn
            onPress={() => {
              //@ts-ignore
              navigation.navigate("Home");
            }}
            containerStyle={{ backgroundColor: COLORS.lightBg, marginTop: 15 }}
            textStyle={{ color: COLORS.yellow }}
            text="Continue Booking"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingSuccessfullScreen;

const styles = StyleSheet.create({
  grayText: {
    textAlign: "center",
    color: "gray",
  },
});
