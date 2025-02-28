import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import MainLayout from "../../components/MainLayout";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import PrimaryBtn from "../../components/PrimaryBtn";
import {
  RegularText,
  SmallText10B,
  SmallTextB,
  TitleText,
} from "../../components/MyText";
import { COLORS } from "../../styles";

const CompleteBookingScreeen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  return (
    <MainLayout title="Track Booking" onBack={navigation.goBack}>
        <View style={{flex:1}}>

      <View style={styles.container}>
        <View style={styles.container2}>
          <TitleText bold>
            Your Booking code:{" "}
            <TitleText bold style={styles.highlight}>
              {"   "}#800715
            </TitleText>
          </TitleText>
          <TitleText bold>
            3 Services -{" "}
            <TitleText style={styles.priceHighlight}>
              {"                 "}s$270.79
            </TitleText>
          </TitleText>
        </View>
        <View style={styles.container2}>
          <View style={styles.row}>
            <RegularText>Transacrtion ID</RegularText>
            <RegularText bold>TXN123456789</RegularText>
          </View>

          <View style={styles.row}>
            <RegularText>Date</RegularText>
            <RegularText bold>Nov 29, 2024</RegularText>
          </View>
          
          <View style={styles.row}>
            <RegularText>Amount</RegularText>
            <RegularText bold>$270.90</RegularText>
          </View>
          <View style={styles.row}>
            <RegularText>Payment Methid</RegularText>
            <RegularText bold>Visa</RegularText>
          </View>
          <View style={styles.row}>
            <RegularText>Payment Status</RegularText>
            <RegularText bold>Completed</RegularText>
          </View>
          <View>
          </View>
        </View>
      </View>
            <PrimaryBtn containerStyle={{marginHorizontal:20,marginBottom:20}} text="Back To Home"/>
        </View>

    </MainLayout>
  );
};

export default CompleteBookingScreeen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 0,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  container2: {
    marginBottom: 20,
    backgroundColor: COLORS.bg,
    borderRadius: 15,
    padding: 15,
  },

  highlight: {
    color: "#28A745",
  },

  priceHighlight: {
    color: "#DC3545",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",marginBottom:12
  },
});
