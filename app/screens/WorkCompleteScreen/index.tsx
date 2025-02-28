import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../styles";
import PrimaryBtn from "../../components/PrimaryBtn";
import { MediumText, Text25, } from "../../components/MyText";
import Icon from "../../../assets/images/svg/bookingSuccess.svg";
import { useNavigation } from "@react-navigation/native";

const WorkCompleteScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon style={{ alignSelf: "center" }} />
        <View
          style={{
            padding: 20,
            backgroundColor: "white",
            borderRadius: 15,
            width: "90%",
            paddingVertical: 30,
            marginTop: 30,
          }}
        >
          <Text25 bold style={{ alignSelf: "center", marginBottom: 5 }}>
            Work Completed
          </Text25>
          {/* <MediumText bold style={styles.grayText}>
            We will start work on time
          </MediumText>
          <MediumText bold style={styles.grayText}>
            Thank you!
          </MediumText> */}
          <PrimaryBtn
            onPress={() => {
              //@ts-ignore
              navigation.navigate("Booking");
            }}
            text="Continue"
            containerStyle={{ marginTop: 20 }}
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default WorkCompleteScreen;

const styles = StyleSheet.create({
  grayText: {
    textAlign: "center",
    color: "gray",
  },
});
