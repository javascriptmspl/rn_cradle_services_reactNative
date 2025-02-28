import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { RegularText, SmallText, TitleText } from "../../components/MyText";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const daysData = [
  { id: "0", name: "Sun" },
  { id: "1", name: "Mon" },
  { id: "2", name: "Tue" },
  { id: "3", name: "Wed" },
  { id: "4", name: "Thu" },
  { id: "5", name: "Fri" },
  { id: "6", name: "Sat" },
];

const timeSlots = [
  { id: "1", label: "Full Day", time: "9:00 AM to 7:00 PM" },
  { id: "2", label: "Morning", time: "9:00 AM to 12:00 PM" },
  { id: "3", label: "Evening", time: "6:00 PM to 12:00 PM" },
  { id: "4", label: "Midnight", time: "12:00 PM to 6:00 AM" },
];

const ManageAvailabilityScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  // State to manage selected days and time slots
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<Record<string, boolean>>(
    {}
  );

  // Day Selection Logic
  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // Time Slot Selection Logic
  const toggleTime = (id: string) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the selected state for this time slot
    }));
  };
  
  return (
    <MainLayout title="Manage Availability" onBack={navigation.goBack}>
      <ScrollView style={styles.container}>
        {/* {/ Available Days /} */}
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 15,
            marginBottom: 30,
          }}
        >
          <TitleText bold style={styles.subtitle}>
            Available Day
          </TitleText>
          <View style={styles.dayContainer}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={daysData}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dayButton,
                    selectedDays.includes(item.name) &&
                      styles.selectedDayButton,
                  ]}
                  onPress={() => toggleDay(item.name)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      selectedDays.includes(item.name) &&
                        styles.selectedDayText,
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <Text style={styles.dynamicText}>
            {selectedDays.length > 0
              ? `Every:  ${selectedDays.join(",  ")}`
              : "Select Days"}
          </Text>
        </View>

        {/* {/ Time Slots /} */}
        {timeSlots.map((item) => {
          const isSelected = selectedTimes[item.id] || false; // Check if this time slot is selected
          return (
            <Pressable
              key={item.id}
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 15,
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginBottom: 20,
              }}
              onPress={() => toggleTime(item.id)} // Toggle the selection on press
            >
              <MaterialCommunityIcons
                name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"} // Toggle icon based on selection
                size={24}
                color={COLORS.primary}
              />
              <View>
                <RegularText bold>{item.label}</RegularText>
                <SmallText>{item.time}</SmallText>
              </View>
            </Pressable>
          );
        })}

        {/* {/ Save Button /} */}
        <PrimaryBtn text="Save" />
      </ScrollView>
    </MainLayout>
  );
};

export default ManageAvailabilityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 10,
  },
  dayContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  dayButton: {
    padding: 10,
    marginRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  selectedDayButton: {
    backgroundColor: COLORS.primary,
  },
  dayText: {
    color: "#333",
    fontWeight: "500",
  },
  selectedDayText: {
    color: "#FFF",
  },
  dynamicText: {
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  actionButton: {
    padding: 10,
    backgroundColor: "#DDD",
    borderRadius: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  checkBox: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
