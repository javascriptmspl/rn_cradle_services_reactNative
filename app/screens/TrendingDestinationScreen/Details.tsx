import { View, StyleSheet } from "react-native";
import React from "react";
import { SmallText10B, SmallTextB } from "../../components/MyText";
import Entypo from "react-native-vector-icons/Entypo";
import PrimaryBtn from "../../components/PrimaryBtn";
import { SheetManager } from "react-native-actions-sheet";
import { SHEETS } from "../../sheets/sheets";

type RowProps = {
  text?: string;
};

const Row = ({ text }: RowProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Entypo name="dot-single" size={15} color="black" />
      <SmallText10B>{text}</SmallText10B>
    </View>
  );
};

const Details = () => {
  return (
    <View>
      <View style={{ marginTop: 10, paddingBottom: 20 }}>
        <Row text="Destination: Antelope Canyon, Arizona" />
        <Row text="Duration: 5 days" />
        <Row text="Dates:02 sep - 07 sep" />

        <SmallText10B style={{ marginTop: 15 }}>
          Day 1: Arrival and Exploration
        </SmallText10B>
        <Row text="Morning" />
        <Row text="Arrive in Page, Arizona." />
        <Row text="Check-in to your accommodation." />
        <Row text="Visit the Horseshoe Bend viewpoint." />
        <Row text="Afternoon" />
        <Row text="Lunch at a local restaurant." />
        <Row text="Explore the Glen Canyon Dam and Visitor Center." />
        <Row text="Evening" />
        <Row text="Dinner at Restaurant." />
        <Row text="Relax at the accommodation or take a stroll around Lake Powell." />

        <SmallText10B style={{ marginTop: 15 }}>
          Day2: Antelope Canyon Tour
        </SmallText10B>
        <Row text="Morning" />
        <Row text="Arrive in Page, Arizona." />
        <Row text="Check-in to your accommodation." />
        <Row text="Visit the Horseshoe Bend viewpoint." />
        <Row text="Afternoon" />
        <Row text="Lunch at a local restaurant." />
        <Row text="Explore the Glen Canyon Dam and Visitor Center." />
        <Row text="Evening" />
        <Row text="Dinner at Restaurant." />
        <Row text="Relax at the accommodation or take a stroll around Lake Powell." />

        <SmallText10B style={{ marginTop: 15 }}>
          Day 3: Local Exploration and Departure
        </SmallText10B>
        <Row text="Morning" />
        <Row text="Arrive in Page, Arizona." />
        <Row text="Check-in to your accommodation." />
        <Row text="Visit the Horseshoe Bend viewpoint." />
        <Row text="Afternoon" />
        <Row text="Lunch at a local restaurant." />
        <Row text="Explore the Glen Canyon Dam and Visitor Center." />
        <Row text="Evening" />
        <Row text="Dinner at Restaurant." />
        <Row text="Relax at the accommodation or take a stroll around Lake Powell." />

        <PrimaryBtn
          onPress={() => {
            SheetManager.show(SHEETS.DestinationBookingSheet);
          }}
          containerStyle={{ marginTop: 20 }}
          text="Book Now"
        />
      </View>
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginTop: 15,
    backgroundColor: "white",
  },
  dp: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});
