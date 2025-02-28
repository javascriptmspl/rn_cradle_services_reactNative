import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import { RegularText, RegularTextGray, Text25 } from "../../components/MyText";
import OtpInputs from "react-native-otp-inputs";
import PrimaryBtn from "../../components/PrimaryBtn";
import { COLORS } from "../../styles";

const ForgotPassOtpVerifyScreen = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <MainLayout onBack={navigation.goBack} title="Forgot Password">
      <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 15 }}>
            <RegularText>We will send a OTP to</RegularText>
            <RegularText>the email address you registered</RegularText>
            <RegularText>to regian your password</RegularText>
          </View>

          <OtpInputs
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
            autofillFromClipboard={false}
            inputStyles={{
              width: 70,
              height: 70,
              margin: 8,
              fontSize: 18,
              textAlign: "center",
              marginTop: 20,
              backgroundColor: "#F4F5F7",
              borderRadius: 10,
            }}
            handleChange={(code) => setOtp(code)}
            numberOfInputs={4}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              gap: 10,
              marginTop: 20,
            }}
          >
            <RegularText>Didn't receive the code?</RegularText>
            <TouchableOpacity>
              <RegularText bold style={{ color: COLORS.primary }}>
                Resend Code
              </RegularText>
            </TouchableOpacity>
          </View>

          <PrimaryBtn
            onPress={() => navigation.navigate("SetNewPassword")}
            text={"Verify"}
            loading={loading}
            containerStyle={{
              marginHorizontal: 20,
              marginBottom: 30,
              marginTop: 20,
            }}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default ForgotPassOtpVerifyScreen;
