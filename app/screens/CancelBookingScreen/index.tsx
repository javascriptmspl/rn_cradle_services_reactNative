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

const CancelBookingScreen = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const reasons = [
    "Schedule or travel plans have changed.",
    "Accidentally booked the same service twice.",
    "Found a better option or deal elsewhere.",
    "Can't afford the booking at the moment.",
    "No longer want the booking.",
  ];

  const handleReasonSelect = (reason: any) => {
    setSelectedReason(reason);
  };

  return (
    <MainLayout title="Cancel Booking" onBack={navigation.goBack}>
      <View style={styles.container}>
        {/* {/ Prompt /} */}
        <TitleText bold>
          Are you sure you want to cancel your booking?
        </TitleText>

        {/* {/ Reasons List /} */}
        <RegularText bold style={{ marginTop: 20 }}>
          Please select a reason for cancellation
        </RegularText>
        <FlatList
          data={reasons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.radioContainer,
                selectedReason === item && styles.radioSelectedContainer,
              ]}
              onPress={() => handleReasonSelect(item)}
            >
              <Fontisto
                name={
                  selectedReason === item
                    ? "radio-btn-active"
                    : "radio-btn-passive"
                }
                size={18}
                color={selectedReason === item ? "#DC3545" : "lightgray"}
              />
              <Text style={styles.reasonText}>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ marginVertical: 10 }}
        />

        {/* {/ Note /} */}
        <SmallTextB bold style={{ marginBottom: 20 }}>
          Please note:{" "}
          <SmallText10B bold>
            Cancelling your booking may result in a cancellation fee based on
            the terms of your booking.
          </SmallText10B>
        </SmallTextB>

        {/* {/ Buttons /} */}
        <PrimaryBtn onPress={navigation.goBack}
          containerStyle={{ backgroundColor: "#DC3545" }}
          text="Cancel"
        />
        <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

export default CancelBookingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderRadius: 15,
    marginTop: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  prompt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subPrompt: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 10,
    height: 50,
    gap: 10,
  },
  radioSelectedContainer: {
    borderColor: "#DC3545",
    backgroundColor: "#ffe5e5",
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    marginRight: 10,
  },
  radioSelectedCircle: {
    borderColor: "#DC3545",
    backgroundColor: "#DC3545",
  },
  reasonText: {
    fontSize: 14,
    color: "#000",
  },
  note: {
    fontSize: 12,
    color: "#777",
    marginVertical: 10,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#28A745",
    padding: 12,
    borderRadius: 60,
    alignItems: "center",
    marginTop: 10,
    height: 55,
  },
  backButtonText: {
    color: "#28A745",
    fontSize: 16,
    fontWeight: "bold",
  },
});
