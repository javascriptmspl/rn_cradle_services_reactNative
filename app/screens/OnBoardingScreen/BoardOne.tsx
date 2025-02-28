import { View, Dimensions, StyleSheet, Image } from "react-native";
import React from "react";
import {
  BigText,
  MediumText,
  RegularText,
  Text25,
  TitleText,
} from "../../components/MyText";
import ImageOne from "../../../assets/images/svg/OnBoardingOne.svg";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../../styles";

const { width } = Dimensions.get("window");

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardOne = ({ handleSkip, handleNext }: Props) => {
  return (
    <View
      style={{
        width: width,
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
          source={require("../../../assets/images/Ob1.png")}
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
          <RegularText
            style={{
              textAlign: "center",
              width: 250,
              marginTop: 20,
              color: "white",
              letterSpacing: 0.5,
            }}
          >
            Reference site about Lorem Ipsum, giving information origins as well
            as a random
          </RegularText>
          <PrimaryBtn
            containerStyle={{
              backgroundColor: "white",
              width: "80%",
              marginTop: 30,
            }}
            textStyle={{ color: "#1CAE81" }}
            text="NEXT"
            onPress={handleNext}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 25,
              gap: 7,
            }}
          >
            <View
              style={{
                width: 13,
                height: 13,
                borderRadius: 20,
                backgroundColor: "orange",
              }}
            ></View>
            <View
              style={{
                width: 13,
                height: 13,
                borderRadius: 20,
                backgroundColor: "lightgray",
              }}
            ></View>
            <View
              style={{
                width: 13,
                height: 13,
                borderRadius: 20,
                backgroundColor: "lightgray",
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BoardOne;


