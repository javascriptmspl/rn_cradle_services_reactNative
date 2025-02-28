import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import {
  RegularText,
  RegularTextGray,
  Text25,
  TitleText,
} from "../../components/MyText";
import OtpInputs from "react-native-otp-inputs";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/feature/auth/authSlice";
import { COLORS } from "../../styles";

const VerifyOtpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // Timer in seconds
  const params = useRoute<any>().params;
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  useEffect(() => {
    if (timeLeft === 0) return; // Stop when the timer reaches 0

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [timeLeft]);

  // Format the time as MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const handleVerifyOtp = async () => {
    dispatch(
      setAuth({
        name: "GHOST",
        token: "GHOST_TOKEN",
      })
    );
  };

  return (
    <MainLayout onBack={navigation.goBack} title="Phone Verification">
      <ScrollView style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text25 bold style={{ textAlign: "center", marginVertical: 15 }}>
            OTP Verification
          </Text25>
          <RegularTextGray
            style={{
              textAlign: "center",
            }}
          >
            An authentication code has been
          </RegularTextGray>
          <RegularTextGray
            style={{
              textAlign: "center",
            }}
          >
            sent to (+880) 111 222 333
          </RegularTextGray>
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
          <TitleText style={{textAlign:'center', marginBottom:25}}>
            {timeLeft > 0 ? `${formatTime(timeLeft)} Sec left` : "Time's up!"}
          </TitleText>

          <PrimaryBtn
            onPress={handleVerifyOtp}
            text={"Verify"}
            loading={loading}
            containerStyle={{ marginHorizontal: 20, marginBottom: 30 }}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default VerifyOtpScreen;
