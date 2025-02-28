import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import MainLayout from "../MainLayout";
import { COLORS } from "../../styles";
import { RegularText, SmallText } from "../MyText";
import { useDispatch } from "react-redux";

const { width, height } = Dimensions.get("screen");
type Props = {
  onHide?: () => void;
};

const DeleteServicePopup = ({ onHide }: Props) => {
  const dispatch = useDispatch();

  return (
    <Modal transparent visible={true}>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: "rgba(0,0,0,0.1)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: COLORS.white,
              borderRadius: 20,
            }}
          >
            <View style={{ padding: 20 }}>
              <RegularText
                style={{ fontSize: 18, marginBottom: 15, textAlign: "center" }}
              >
                Confirm Service Delete ?
              </RegularText>
              <RegularText
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  color: COLORS.grey,
                }}
              >
                You will permanently lose this service information and booking
                interactions.
              </RegularText>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={onHide}
                style={styles.btn}
              >
                <RegularText style={{ textAlign: "center" }}>Back</RegularText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={onHide}
                style={styles.btn}
              >
                <RegularText style={{ color: "red", textAlign: "center" }}>
                  Confirm
                </RegularText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DeleteServicePopup;

const styles = StyleSheet.create(
  {
    btn:{
      padding: 20,
      flex: 1,
      borderBottomRightRadius: 20,
      borderColor: "rgba(0,0,0,0.2)",
      borderTopWidth: 0.6,
      borderLeftWidth: 0.3,
    }
  });
