import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import MainLayout from "../../components/MainLayout";
import { HomeStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import { TitleText } from "../../components/MyText";
import AntDesign from "react-native-vector-icons/AntDesign";

const BookingOneScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const [selectedPeriod, setSelectedPeriod] = useState("Morning");
  const [selectedTime, setSelectedTime] = useState("08:00 am");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  const timeSlots = {
    Morning: [
      "08:00 am",
      "08:30 am",
      "09:00 am",
      "09:30 am",
      "10:00 am",
      "11:00 am",
    ],
    Afternoon: [
      "12:00 pm",
      "01:00 pm",
      "02:00 pm",
      "03:00 pm",
      "04:00 pm",
      "04:30 am",
    ],
    Evening: [
      "5:00 pm",
      "05:30 am",
      "6:00 pm",
      "7:00 pm",
      "8:00 pm",
      "09:00 pm",
    ],
  };

  const handlePeriodSelection = (period: any) => {
    setSelectedPeriod(period);
    setSelectedTime(""); // Clear time selection when switching periods
  };

  const handleTimeSelection = (time: any) => {
    setSelectedTime(time);
  };

  return (
    <MainLayout title="Booking" onBack={navigation.goBack}>
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 15,
          margin: 15,
        }}
      >
        <View style={styles.stepper}>

          <View style={styles.stepperCircle}>
          <View style={styles.activeStepperCircle}>
          </View>
          </View>

          <View style={styles.stepDivider} />
          <View style={styles.stepperCircle}>
            <View style={styles.inActiveStepperCircle}>
              
            </View>
          </View>

          <View style={styles.stepDivider} />
          <View style={styles.stepperCircle}>
            <View style={styles.inActiveStepperCircle}></View>
          </View>

        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <Text style={styles.activeStep}>Date & Time</Text>
          <Text style={styles.inactiveStep}>Recipient</Text>
          <Text style={styles.inactiveStep}>Finalize</Text>
        </View>

        <TitleText bold>Pickup Date</TitleText>
        <CalendarStrip
          style={styles.calendar}
          scrollable
          daySelectionAnimation={{
            type: "background",
            duration: 200,
            highlightColor: COLORS.primary,
          }}
          highlightDateNameStyle={styles.highlightedDayText}
          highlightDateNumberStyle={styles.highlightedDateText}
          dateNumberStyle={styles.dateText}
          dateNameStyle={styles.dayText}
          onDateSelected={(date) =>
            setSelectedDate(moment(date).format("YYYY-MM-DD"))
          }
          selectedDate={selectedDate}
        />

        <TitleText style={{ marginVertical: 15 }} bold>
          Pickup Time
        </TitleText>
        <View style={styles.periodContainer}>
          {Object.keys(timeSlots).map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.activePeriodButton,
              ]}
              onPress={() => handlePeriodSelection(period)}
            >
              <Text
                style={
                  selectedPeriod === period
                    ? styles.activePeriodText
                    : styles.periodText
                }
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.timeContainer}>
          {timeSlots[selectedPeriod].map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeBox,
                selectedTime === time && styles.selectedTimeBox,
              ]}
              onPress={() => handleTimeSelection(time)}
            >
              <Text
                style={
                  selectedTime === time
                    ? styles.selectedTimeText
                    : styles.timeText
                }
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <PrimaryBtn
        onPress={()=>navigation.navigate('BookingTwo')}
        containerStyle={{ marginTop: 40 }} text="Continue" />
      </View>
    </MainLayout>
  );
};

export default BookingOneScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activeStep: { fontSize: 16, fontWeight: "bold", color: COLORS.primary },
  inactiveStep: { fontSize: 16, color: "black", fontWeight: "bold" },
  stepDivider: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(0,0,0,0.09)",
    marginHorizontal: 5,
  },
  calendar: {
    height: 100,
    marginBottom: 20,
  },
  highlightedDayText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  highlightedDateText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  dayText: {
    color: "#A0A3BD",
    fontSize: 14,
  },
  dateText: {
    color: "black",
    fontSize: 14,
  },
  periodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  periodButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: COLORS.bg,
  },
  activePeriodButton: {
    backgroundColor: COLORS.primary,
  },
  periodText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  activePeriodText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  timeBox: {
    width: "30%",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: COLORS.lightBg,
  },
  selectedTimeBox: {
    backgroundColor: "#FFA26B",
  },
  timeText: {
    color: "#FFA26B",
  },
  selectedTimeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  stepperCircle: {
    height: 33,
    width: 33,
    borderRadius: 25,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveStepperCircle: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: "white", alignItems: "center",
    justifyContent: "center",
  },
  activeStepperCircle: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: COLORS.primary, alignItems: "center",
    justifyContent: "center",
  },
});
