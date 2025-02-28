import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import { RootStackParams } from "./types";
import { useNavigation } from "@react-navigation/native";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import VerifyOtpScreen from "../screens/VerifyOtpScreen";
import LanguageSelectScreen from "../screens/LanguageSelectScreen";
import SignupScreen from "../screens/SignupScreen";
import { useSelector } from "react-redux";
import LoginWithEmailScreen from "../screens/LoginWithEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import ForgotPassOtpVerifyScreen from "../screens/ForgotPassOtpVerifyScreem";
import SetNewPasswordScreen from "../screens/SetNewPasswordScreen";
import AccountCreatedScreen from "../screens/AccountCreatedScreen";
import ChooseModeScreen from "../screens/ChooseModeScreen";
import { RootState } from "../redux";
import { tokenSelector } from "../redux/feature/auth/authSlice";
import ProviderProfileCreateScreen from "../screens/ProviderProfileCreateScreen";
import ProfileVerificationScreen from "../screens/ProfileVerificationScreen";

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = () => {
  const { isFirstTime } = useSelector((s: RootState) => s.app);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const token = useSelector(tokenSelector);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!token ? (
        <>
          {/* {isFirstTime ? ( */}
          <>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          </>
          {/* ) : null} */}
          {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
          <Stack.Screen name="ChooseMode" component={ChooseModeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="LoginWithEmail"
            component={LoginWithEmailScreen}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen
            name="ForgotPassOtpVerify"
            component={ForgotPassOtpVerifyScreen}
          />
          <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
          <Stack.Screen
            name="SetNewPassword"
            component={SetNewPasswordScreen}
          />
          <Stack.Screen
            name="AccountCreated"
            component={AccountCreatedScreen}
          />
          <Stack.Screen
            name="ProviderProfileCreate"
            component={ProviderProfileCreateScreen}
          />
          <Stack.Screen
            name="ProfileVerification"
            component={ProfileVerificationScreen}
          />

          <Stack.Screen
            name="LanguageSelect"
            component={LanguageSelectScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTab" component={MainTabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
