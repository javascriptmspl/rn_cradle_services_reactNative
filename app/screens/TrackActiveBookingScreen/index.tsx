import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // For optional back and map icons
import PrimaryBtn from "../../components/PrimaryBtn";
import { COLORS } from "../../styles";
import MainLayout from "../../components/MainLayout";
import { ProfileStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const TrackActiveBookingScreen = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const steps = [
    {
      label: "Booking placed",
      description: "We have received your order",
      date: null,
      completed: true,
    },
    {
      label: "Confirmed",
      description: "Your Booking has been confirmed",
      date: null,
      completed: true,
    },
    {
      label: "Handyman On the way",
      description: "Estimated for 02 July, 2021",
      date: "02 July, 2021",
      completed: true,
    },
    {
      label: "Reached at location",
      description: "Estimated for 5 July, 2021",
      date: "5 July, 2021",
      completed: false,
    },
    {
      label: "Work Done",
      description: "Estimated for 7 July, 2021",
      date: "7 July, 2021",
      completed: false,
    },
  ];

  return (
    <MainLayout title="Track Booking" onBack={navigation.goBack}>

    <View style={styles.container}>

      <View style={styles.bookingDetails}>
        <Text style={styles.bookingCode}>
          Your Booking code: <Text style={styles.highlight}>#800715</Text>
        </Text>
        <Text style={styles.price}>
          3 Services - <Text style={styles.priceHighlight}>$270.79</Text>
        </Text>
      </View>

      <ScrollView style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <View key={index} style={styles.step}>
            <View style={styles.stepIndicator}>
              {step.completed ? (
                <View style={styles.completedIndicator}>
                  <MaterialIcons name="check" size={16} color="#fff" />
                </View>
              ) : (
                <View style={styles.pendingIndicator} />
              )}
              {index < steps.length - 1 && <View style={styles.stepLine} />}
            </View>
            <View style={styles.stepDetails}>
              <Text style={styles.stepTitle}>{step.label}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <PrimaryBtn onPress={navigation.goBack} containerStyle={{ marginBottom: 20 }} text="Back to Home" />
    </View>
    </MainLayout>

  );
};

export default TrackActiveBookingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 16,margin:15,borderRadius:15
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
    bookingDetails: {
      marginBottom: 20,
    },
    bookingCode: {
      fontSize: 16,
      color: "#000",
    },
    highlight: {
      fontWeight: "bold",
      color: "#28A745",
    },
    price: {
      fontSize: 16,
      color: "#000",
    },
    priceHighlight: {
      color: "#DC3545",
      fontWeight: "bold",
    },
    stepsContainer: {
      flex: 1,
    },
    step: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 0,
    },
    stepIndicator: {
      alignItems: "center",
      marginRight: 10,
    },
    completedIndicator: {
      width: 25,
      height: 25,
      borderRadius: 12,
      backgroundColor: COLORS.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    pendingIndicator: {
      width: 25,
      height: 25,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
    stepLine: {
      width: 3,
      height: 50,
      backgroundColor: COLORS.primary,
    },
    stepDetails: {
      flex: 1,
    },
    stepTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#000",
    },
    stepDescription: {
      fontSize: 14,
      color: "#777",
    },
    backButton: {
      backgroundColor: "#28A745",
      padding: 12,
      borderRadius: 6,
      alignItems: "center",
      marginTop: 20,
    },
    backButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });