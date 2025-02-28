import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { COLORS } from "../../styles";
import Octicons from "react-native-vector-icons/Octicons";
import PrimaryBtn from "../../components/PrimaryBtn";
import { RegularTextGray, Text22, TitleText } from "../../components/MyText";
import { RootStackParams } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const AccountCreatedScreen = () => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg, padding: 20 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Octicons name="check-circle-fill" size={250} color={COLORS.primary} />
      </View>
      <View
        style={{
          bottom: 30,
          borderRadius: 13,
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <Text22 bold style={{ textAlign: "center", marginVertical: 15 }}>
          Account Created!
        </Text22>
        <TitleText style={{ color: "gray", textAlign: "center" }}>
          Your account has been created successfully.
        </TitleText>
        <TitleText
          style={{
            color: "gray",
            textAlign: "center",
            marginTop: 5,
            marginBottom: 30,
          }}
        >
          Please sign in to use your account and enjoy
        </TitleText>
        <PrimaryBtn onPress={()=>navigation.navigate('Welcome')} text="Take me to sign in" />
      </View>
    </SafeAreaView>
  );
};

export default AccountCreatedScreen;
