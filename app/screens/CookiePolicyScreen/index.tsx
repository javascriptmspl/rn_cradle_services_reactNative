import { View, Text, ScrollView } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { RegularText, RegularTextGray } from "../../components/MyText";
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

const CookiePolicyScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Cookie Policy">
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View
          style={{ padding: 15, backgroundColor: "white", borderRadius: 12 }}
        >
          <RegularText bold>1. What are cookies ?</RegularText>
          <RegularText style={{ marginVertical: 15, letterSpacing: 0.5 }}>
            Cookies are small text files stored on your device that help us
            enhance your experience, improve our app, and offer personalized
            content.
          </RegularText>

          <RegularText bold style={{ marginVertical: 15 }}>
            2. Why we use cookies ?
          </RegularText>

          <RegularText style={{letterSpacing:0.5}}>We use cookies to:</RegularText>
          <Row text="Improve App Functionality: Essential cookies help us provide basic features like login and preferences." />
          <Row text="Analyze Usage: Analytics cookies help us understand how you interact with the app." />

          <RegularText bold style={{ marginVertical: 30, marginBottom: 15 }}>
            3. Managing Cookies
          </RegularText>
          <RegularText style={{letterSpacing:0.5}}>
            You can control your cookie preferences in the app settings.
            Disabling some cookies may affect app functionality or your
            experience.
          </RegularText>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default CookiePolicyScreen;
