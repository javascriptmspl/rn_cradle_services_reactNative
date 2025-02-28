import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import CardArrowOneSvg from "../../../assets/svg/CardArrowOne.svg";
import CardArrowTwoSvg from "../../../assets/svg/CardArrowTwo.svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParams } from "../../navigation/types";
import {
  RegularText,
  RegularTextGray,
  Text25,
  TitleText,
} from "../../components/MyText";
import { AppDispatch, RootState } from "../../redux";
import { changeAppMode } from "../../redux/feature/auth/authSlice";
import { AppMode } from "../../constants";

const ChooseModeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const mode = useSelector((s: RootState) => s.auth.mode);
  const dispatch = useDispatch<AppDispatch>();

  const handleContinue = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.conatiner}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.conatiner}
      >
        <View style={styles.section1}>
          <Text25 bold style={{ textAlign: "center" }}>
            Continue as
          </Text25>
          <RegularTextGray
            style={{ textAlign: "center", marginHorizontal: 35 }}
          >
            To continue to the next page, please select which one you are
          </RegularTextGray>
        </View>

        <View>
          <Pressable
            // onPress={() => setMode("Customer")}
            onPress={() => {
              dispatch(changeAppMode(AppMode.Consumer))
            }}
            style={
              mode === "Consumer"
                ? [styles.card, styles.card1]
                : [styles.card, { backgroundColor: "lightgray" }]
            }
          >
            <TitleText
              style={{
                color: mode === "Consumer" ? COLORS.white : COLORS.grey,
              }}
              bold
            >
              Consumer
            </TitleText>
            <RegularText
              style={{
                color: mode === "Consumer" ? COLORS.white : COLORS.grey,
              }}
            >
              Finding a Project here never
            </RegularText>
            <RegularText
              style={{
                color: mode === "Consumer" ? COLORS.white : COLORS.grey,
              }}
            >
              been easier thab befor
            </RegularText>
            {mode === "Consumer" ? (
              <CardArrowTwoSvg style={styles.cardArrow} />
            ) : (
              // <CardArrowTwoSvg style={styles.cardArrow} />
              <CardArrowOneSvg style={styles.cardArrow} />
            )}
          </Pressable>
          <Pressable
            // onPress={() => setMode("Provider")}
            onPress={() => {
              dispatch(changeAppMode(AppMode.Provider))
            }}
            style={
              mode === "Provider"
                ? [styles.card, styles.card1]
                : [styles.card, { backgroundColor: "lightgray" }]
            }
          >
            <TitleText
              bold
              style={{
                color: mode === "Provider" ? COLORS.white : COLORS.grey,
              }}
            >
              Provider
            </TitleText>
            <RegularText
              style={{
                color: mode === "Provider" ? COLORS.white : COLORS.grey,
              }}
            >
              Let’s recruit your great{" "}
            </RegularText>
            <RegularText
              style={{
                color: mode === "Provider" ? COLORS.white : COLORS.grey,
              }}
            >
              candidate faster here{" "}
            </RegularText>
            {mode === "Provider" ? (
              <CardArrowTwoSvg style={styles.cardArrow} />
            ) : (
              <CardArrowOneSvg style={styles.cardArrow} />
              // <CardArrowTwoSvg style={styles.cardArrow} />
            )}
          </Pressable>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryBtn text={"Continue"} onPress={handleContinue} />
      </View>
    </View>
  );
};

export default ChooseModeScreen;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  section1: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  card: {
    paddingLeft: 30,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    gap: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginBottom: 5,
  },
  card1: {
    backgroundColor: COLORS.primary,
  },
  cardArrow: { position: "absolute", right: 0 },
});
