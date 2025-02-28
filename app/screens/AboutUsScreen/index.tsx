import { View, Text, ScrollView } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { RegularText } from "../../components/MyText";
import Entypo from "react-native-vector-icons/Entypo";

type Props = {
  text?: string;
};
const Row = ({ text }: Props) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 3 }}>
      <Entypo name="dot-single" size={24} color="black" />
      <RegularText style={{ letterSpacing: 0.5, marginRight: 10 }}>
        {text}
      </RegularText>
    </View>
  );
};

const AboutUsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="About Us">
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View
          style={{ padding: 15, backgroundColor: "white", borderRadius: 12 }}
        >
          <RegularText bold>Our Mission</RegularText>
          <RegularText style={{ marginVertical: 15, letterSpacing: 0.5 }}>
            At [App Name], our mission is to [state the mission, e.g., "empower
            you with the tools to track your health," "connect you with your
            community," or "redefine how you shop for groceries"]. We believe in
            [key values like innovation, user-centric design, sustainability,
            etc.].
          </RegularText>

          <RegularText bold style={{ marginVertical: 15 }}>
            What We Offer
          </RegularText>

          <Row text="Feature 1: [Short description of a key feature or service]." />
          <Row text="Feature 2: [Short description of another feature]." />
          <Row text="Feature 3: [Short description of third feature]." />

          <RegularText bold style={{ marginVertical: 30 }}>
            Why Choose Us
          </RegularText>

          <Row text="User-Focused: We design with you in mind." />
          <Row text="Reliable: Count on us for a smooth and dependable experience." />
          <Row text="Innovative: We're always looking for ways to improve and evolve." />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default AboutUsScreen;
