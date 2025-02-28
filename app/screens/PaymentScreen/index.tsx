import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BookingStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../../components/MainLayout";
import { COLORS } from "../../styles";
import {
  RegularText,
  SmallText,
  Text22,
  Text25,
  TitleText,
} from "../../components/MyText";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import PrimaryBtn from "../../components/PrimaryBtn";

const PaymentScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BookingStackParams>>();
  return (
    <MainLayout title="Payment" onBack={navigation.goBack}>
      <View style={{ flex: 1 }}>
        {/* {HEADER} */}
        <View style={styles.header}>
          <Text22 style={styles.whiteText}>Order Amount</Text22>
          <Text25 style={styles.whiteText} bold>
            $20.00
          </Text25>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <RegularText style={styles.whiteText}>Order #12345</RegularText>
            <RegularText style={styles.whiteText}>
              Nov 20, 2024 | 12:40 PM
            </RegularText>
          </View>
        </View>

        {/* {BLOCKS} */}

        <View style={[styles.row, { justifyContent: "flex-start", gap: 10 }]}>
          <View style={{ alignItems: "center" }}>
            <Fontisto name="radio-btn-active" size={20} color="black" />
            <View
              style={{ height: 20, backgroundColor: "black", width: 2 }}
            ></View>
            <SimpleLineIcons name="location-pin" size={24} color="black" />
          </View>

          <View style={{ gap: 20 }}>
            <RegularText>7958 Swift Street</RegularText>
            <RegularText>123 Main Street, New York, NY 10001</RegularText>
          </View>
        </View>

        <View style={styles.row}>
          <TitleText bold>Services</TitleText>
          <TitleText bold>3</TitleText>
        </View>
        <View style={styles.row}>
          <TitleText bold>Total Amount</TitleText>
          <TitleText bold>$ 20.00</TitleText>
        </View>
        <View style={styles.row}>
          <TitleText bold>Payment type</TitleText>
          <TitleText bold>Cash</TitleText>
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('WorkComplete')}
          containerStyle={{ margin: 20, marginTop: 50 }}
          text="Payment Collected"
        />

        {/* {END} */}
      </View>
    </MainLayout>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    padding: 20,
    gap: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  whiteText: {
    color: "white",
    alignSelf: "center",
  },
  row: {
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
});
