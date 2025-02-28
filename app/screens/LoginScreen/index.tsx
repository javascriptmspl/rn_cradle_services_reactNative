import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navigation/types";
import { BigText, RegularText, RegularTextGray, Text25 } from "../../components/MyText";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import Input from "../../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_KEYS } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setIsFirstTime } from "../../redux/feature/app/appSlice";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LoginScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout title="Sign In" onBack={navigation.goBack}>
      <ScrollView style={{ flex: 1, marginHorizontal: 20, paddingTop: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text25 bold style={{ textAlign: "center", fontSize: 45 }}>
            Login
          </Text25>

          <Input
            icon={() => (
              <FontAwesome name="phone" size={24} color={COLORS.primary} />
            )}
            placeholder="+1 564 898 56"
          />

        <PrimaryBtn
          containerStyle={{ marginTop: 30 }}
          onPress={() => {
            dispatch(setIsFirstTime(false));
            AsyncStorage.setItem("IS_FIRST_TIME", "false");
            navigation.navigate("VerifyOtp");
          }}
          text="Sign In"
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            gap: 10,marginTop:20
          }}
        >
          <RegularText>Don't have an account?</RegularText>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <RegularText style={{ color: COLORS.primary }}>Sign Up</RegularText>
          </TouchableOpacity>
        </View>
        </View>


      </ScrollView>
    </MainLayout>
  );
};

export default LoginScreen;
