
import { View, Text, ScrollView } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams } from "../../navigation/types";
import { RegularText } from "../../components/MyText";

const PrivacyPolicyScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Privacy Policy">
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View
          style={{ padding: 15, backgroundColor: "white", borderRadius: 12 }}
        >
          <RegularText style={{ marginBottom: 15, letterSpacing: 0.5 }}>
            Your privacy is important to us. It is Brainstorming's policy to
            respect your privacy regarding any information we may collect from
            you across our website, and other sites we own and operate.
          </RegularText>
          <RegularText style={{ marginBottom: 15, letterSpacing: 0.5 }}>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </RegularText>
          <RegularText style={{ marginBottom: 15, letterSpacing: 0.5 }}>
            We only retain collected information for as long as necessary to
            provide you with your requested service.
          </RegularText>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default PrivacyPolicyScreen;
