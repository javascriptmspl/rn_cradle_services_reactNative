import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { COLORS } from "../styles";
import { MediumText, RegularText, SmallText } from "../components/MyText";
import PrimaryBtn from "../components/PrimaryBtn";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileStackParams, RootStackParams } from "../navigation/types";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("screen");
type Props = {
  onHide?: () => void;
};

const ForgptPasswordModal = ({ onHide }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "85%",
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: COLORS.white,
              marginBottom: 50,
              paddingBottom: 20,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.primary,
                  height: 50,
                  width: "100%",marginBottom:25
                }}
              >
                <MediumText bold style={{ color: "white" }}>
                  Password Reset Email Sent
                </MediumText>
              </View>

              <RegularText>An email has been sent to</RegularText>
              <RegularText>you follow direction in th email to</RegularText>
              <RegularText style={{ marginBottom: 20 }}>
                reset password
              </RegularText>
            </View>
            <PrimaryBtn
              onPress={() => {
                navigation.navigate("ForgotPassOtpVerify"), onHide;
              }}
              text="OK"
              containerStyle={{width:'60%', alignSelf:'center'}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ForgptPasswordModal;

const styles = StyleSheet.create({});
