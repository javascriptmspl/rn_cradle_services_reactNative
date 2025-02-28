import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BigText, RegularText } from "../../components/MyText";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/types";
import PrimaryBtn from "../../components/PrimaryBtn";

const WelcomeScreen = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 560,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../../assets/images/WelcomeScreen.png")}
        />
      </View>

      <View>
        <Image
          style={{
            height: 550,
            width: "100%",
            resizeMode: "contain",
            marginTop: -150,
            position: "absolute",
          }}
          source={require("../../../assets/images/bg.png")}
        />
        <View style={{ alignItems: "center", marginTop: -60 }}>
          <BigText bold style={{ color: "white" }}>
            Welcome to Cradle
          </BigText>

          <PrimaryBtn
            containerStyle={{
              backgroundColor: "white",
              width: "80%",
              marginTop: 30,
            }}
            textStyle={{ color: "#1CAE81" }}
            text="Continue with Email"
            onPress={()=>navigation.navigate('LoginWithEmail')}
          />
          <PrimaryBtn
            containerStyle={{
              backgroundColor: "#FFA26B",
              width: "80%",
              marginTop: 20,
            }}
            text="Continue with Phone Number"
            onPress={()=>navigation.navigate('Login')}
          />

          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <RegularText style={{ color: "white" }}>
              Don't have an account?{" "}
            </RegularText>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <RegularText style={{ color: "tomato" }}> Register</RegularText>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "grey",
    fontSize: 15,
  },
});
