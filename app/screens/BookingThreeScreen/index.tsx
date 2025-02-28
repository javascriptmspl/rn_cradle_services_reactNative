import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import moment from "moment";
import MainLayout from "../../components/MainLayout";
import { HomeStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import {
  MediumText,
  RegularText,
  SmallText,
  TitleText,
} from "../../components/MyText";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Input from "../../components/Input";

const BookingThreeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [view, setView] = useState(1);

  return (
    <MainLayout title="Booking" onBack={navigation.goBack}>
        <ScrollView showsVerticalScrollIndicator={false}>

      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 15,
          margin: 15,
        }}
      >
        {/* {STEPPER} */}
        <View style={styles.stepper}>
          <View style={styles.stepperCircle}>
            <View style={styles.inActiveStepperCircle}>
              <AntDesign name="checkcircle" size={20} color={COLORS.primary} />
            </View>
          </View>

          <View style={styles.activeStepDivider} />

          <View style={styles.stepperCircle}>
            <View style={styles.inActiveStepperCircle}>
              <AntDesign name="checkcircle" size={20} color={COLORS.primary} />
            </View>
          </View>

          <View style={styles.activeStepDivider} />

          <View style={styles.stepperCircle}>
            <View style={styles.activeStepperCircle}></View>
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
          <Text style={styles.activeStep}>Recipient</Text>
          <Text style={styles.activeStep}>Finalize</Text>
        </View>
        {/* {STEPPER END} */}

        <MediumText bold>Recipient</MediumText>
        {/* {RECIPIENT} */}
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.icon}>
              <FontAwesome5 name="user-alt" size={15} color="white" />
            </View>
            <TitleText>Alexa Smith</TitleText>
          </View>
          <View style={styles.row}>
            <View style={styles.icon}>
              <FontAwesome5 name="phone-alt" size={15} color="white" />
            </View>
            <TitleText>+1 (000) 123-4567</TitleText>
          </View>
          <View style={styles.row}>
            <View style={styles.icon}>
              <MaterialIcons name="location-on" size={20} color="white" />
            </View>
            <TitleText>World Trae Center, 667 Street</TitleText>
          </View>
        </View>

        {/* {TIME INFO} */}
        <MediumText style={{ marginTop: 5 }} bold>
          Time Information
        </MediumText>

        <View style={styles.container}>
          <TitleText bold>Monday, 07 May, 2023</TitleText>
          <SmallText>12:30 PM</SmallText>
        </View>

        {/* {OPTIONS} */}
        <View style={{ flexDirection: "row", gap: 100 ,marginVertical:5}}>
          <View style={styles.row}>
            <MaterialIcons
              onPress={() => setView(1)}
              name={view === 1 ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={COLORS.primary}
            />
            <RegularText
              bold
              style={{ color: view === 1 ? COLORS.primary : "black" }}
            >
              Hourly
            </RegularText>
          </View>

          <View style={styles.row}>
            <MaterialIcons
              onPress={() => setView(2)}
              name={view === 2 ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={COLORS.primary}
            />
            <RegularText
              bold
              style={{ color: view === 2 ? COLORS.primary : "black" }}
            >
              Contact Job
            </RegularText>
          </View>
        </View>

        {/* {FINAL} */}

        <View style={styles.container}>
          <View style={styles.row2}>
            <TitleText bold>Hourly</TitleText>
            <TitleText bold>$50,23</TitleText>
          </View>
          <View style={styles.row2}>
            <TitleText bold>Assurance Tax</TitleText>
            <TitleText bold>$2</TitleText>
          </View>
          <View style={styles.row2}>
            <TitleText bold>Subtotal</TitleText>
            <TitleText bold>$50,25</TitleText>
          </View>
        </View>

        <PrimaryBtn
        onPress={()=>navigation.navigate('BookingSuccessfull')}
        containerStyle={{ marginTop: 20 }} text="Create Booking" />
      </View>
      </ScrollView>

    </MainLayout>
  );
};

export default BookingThreeScreen;
const styles = StyleSheet.create({
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activeStep: { fontSize: 16, fontWeight: "bold", color: COLORS.primary },
  activeStepDivider: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  stepperCircle: {
    height: 33,
    width: 33,
    borderRadius: 25,
    backgroundColor: "#27F3B5",
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveStepperCircle: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  activeStepperCircle: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 15,
    gap: 13,
    marginVertical: 15,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 40,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
