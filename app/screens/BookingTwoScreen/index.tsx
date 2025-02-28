import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import moment from "moment";
import MainLayout from "../../components/MainLayout";
import { HomeStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import { TitleText } from "../../components/MyText";
import AntDesign from "react-native-vector-icons/AntDesign";
import Input from "../../components/Input";

const BookingTwoScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
    const [reviewText, setReviewText] = useState('');
    const maxCharacters = 10;
  
    // Function to handle text input change and update reviewText state
    const handleTextChange = (text:any) => {
      if (text.length <= maxCharacters) {
        setReviewText(text);
      }
    };

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
          <AntDesign name="checkcircle" size={19} color={COLORS.primary} />
          </View>
          </View>

          <View style={styles.activeStepDivider} />

          <View style={styles.stepperCircle}>
          <View style={styles.activeStepperCircle}>
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
          <Text style={styles.activeStep}>Recipient</Text>
          <Text style={styles.inactiveStep}>Finalize</Text>
        </View>
{/* {STEPPER END} */}

        <TitleText bold>Recipient Name</TitleText>
        <Input placeholder="Full Name" />

        <TitleText style={{marginTop:20}} bold>Address</TitleText>
        <Input placeholder="Destination" />
        <TitleText style={{marginTop:20}} bold>Postal Zip</TitleText>
        <Input placeholder="XXXXXX" />
        <TitleText style={{marginTop:20}} bold>Phone Number</TitleText>
        <Input placeholder="XX-XXXX-XXXX" />

        <View style={styles.header}>
        <TitleText bold>Notes</TitleText>
        <Text style={styles.charCount}>
          {reviewText.length}/{maxCharacters}
        </Text>
      </View>

      {/* Review TextInput Box */}
      <TextInput
        style={styles.textInput}
        placeholder="Write your note here..."
        multiline
        value={reviewText}
        onChangeText={handleTextChange}
      />
     
        <PrimaryBtn onPress={() => navigation.navigate("BookingThree")} containerStyle={{ marginTop: 40 }} text="Continue" />
      </View>
      </ScrollView>

    </MainLayout>
  );
};

export default BookingTwoScreen;
const styles = StyleSheet.create({
  
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,marginTop:20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  charCount: {
    fontSize: 14,
    color: 'gray',
  },
  textInput: {
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top', // Align text to the top of the box
    fontSize: 18,
  },
});
