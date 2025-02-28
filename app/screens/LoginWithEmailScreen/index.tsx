import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MainLayout from "../../components/MainLayout";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { BigText, RegularText, SmallText } from "../../components/MyText";
import { COLORS } from "../../styles";
import Input from "../../components/Input";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PrimaryBtn from "../../components/PrimaryBtn";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/feature/auth/authSlice";
import { setIsFirstTime } from "../../redux/feature/app/appSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginWithEmailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isCheck, setIsCheck] = React.useState(false);
  const dispatch = useDispatch();

  const handleVerifyOtp = async () => {
    dispatch(
      setAuth({
        name: "GHOST",
        token: "GHOST_TOKEN",
      })
    );
  };
  
  return (
    <MainLayout onBack={navigation.goBack} title="Sign In">
      <View style={{ flex: 1 }}>
        <View style={{ padding: 15, paddingBottom: 50 }}>
          <BigText bold style={{ color: COLORS.primary, fontSize: 45 }}>
            Welcome Back
          </BigText>
          <RegularText>Sign in to continue</RegularText>
        </View>

        <View style={styles.downview}>
            <View style={{flex:1}}>

          <Input
            placeholder="Email"
            icon={() => (
              <MaterialIcons name="email" size={24} color={COLORS.primary} />
            )}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            icon={() => (
                <FontAwesome name="lock" size={24} color={COLORS.primary} />
            )}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",marginTop:15, marginBottom:50
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <MaterialIcons onPress={() => setIsCheck(!isCheck)}
                name={isCheck ? "check-box" : "check-box-outline-blank"}
                size={24}
                color={COLORS.primary}
              />

              <RegularText>Remember me</RegularText>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>

            <SmallText style={{ color: COLORS.primary }}>
              Forgot Password?
            </SmallText>
            </TouchableOpacity>
          </View>

          <PrimaryBtn
           onPress={() => {
            dispatch(setIsFirstTime(false));
            AsyncStorage.setItem("IS_FIRST_TIME", "false");
            handleVerifyOtp();
          }}
          text="Sign In"/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginBottom:10, gap:10}}>
            <RegularText>Don't have an account?</RegularText>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <RegularText style={{color:COLORS.primary}}>Sign Up</RegularText>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </MainLayout>
  );
};

export default LoginWithEmailScreen;
const styles = StyleSheet.create({
  downview: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
