import { View, TouchableOpacity } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import { RegularText, RegularTextGray, Text25 } from "../../components/MyText";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import Input from "../../components/Input";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const SignupScreen = () => {
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const mode = useSelector((s: RootState) => s.auth.mode);

  const isAppMode = mode === "Consumer";

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isCheck, setIsCheck] = React.useState(false);

  return (
    <MainLayout title="Sign Up" onBack={navigation.goBack}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 15,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 13,
        }}
      >
        {/* <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 100,
            height: 110,
            width: 110,
            backgroundColor: "#F4F5F7",
          }}
        >
          <FontAwesome name="camera" size={40} color="gray" />
        </View> */}

        <Input placeholder="Full Name" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />

        <View
          style={{
            flexDirection: "row",
            gap: 5,
            marginTop: 20,
          }}
        >
          <MaterialIcons
            onPress={() => setIsCheck(!isCheck)}
            name={isCheck ? "check-box" : "check-box-outline-blank"}
            size={24}
            color={COLORS.primary}
          />

          <RegularText>
            By creating an account you agree to our Terms of Service and Privacy
            Poloicy
          </RegularText>
        </View>

        <PrimaryBtn
          onPress={() => {
            isAppMode
              ? navigation.navigate("AccountCreated")
              : navigation.navigate('ProviderProfileCreate');
          }}
          containerStyle={{ marginTop: 20 }}
          text="Sign Up"
        />
        <View
          style={{
            flexDirection: "row",
            gap: 2,
            marginTop: 4,
            justifyContent: "center",
          }}
        >
          <RegularText>Already have an account? </RegularText>
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <RegularText bold style={{ color: COLORS.primary }}>
              Sign In
            </RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};

export default SignupScreen;
