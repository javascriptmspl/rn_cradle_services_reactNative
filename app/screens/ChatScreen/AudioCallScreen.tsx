import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../styles";
import { BigText, RegularText } from "../../components/MyText";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatStackParams } from "../../navigation/types";

const IMG_URI =
  "https://img.freepik.com/free-photo/photo-handsome-man-his-dog-spend-time-autumn-forest_496169-1004.jpg";
const AudioCallScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ChatStackParams>>();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 200,
          width: 200,
          borderRadius: 100,
          marginTop: 120,
          alignSelf: "center",
          borderWidth: 2,
          borderColor: "#02BC49",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ borderRadius: 100, width: 185, height: 185 }}
          source={{ uri: IMG_URI }}
        />
      </View>
      <BigText style={{ textAlign: "center", marginTop: 15 }}>
        Dennis Steele, 23
      </BigText>
      <RegularText
        style={{
          margin: 10,
          textAlign: "center",
          color: COLORS.grey,
        }}
      >
        Calling...
      </RegularText>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 150,
        }}
      >
        <TouchableOpacity style={styles.btn}>
         
          <FontAwesome5 name="phone-alt" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "lightgray" }]}
        >
          <FontAwesome name="volume-up" size={40} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.btn, { backgroundColor: "#ED1B24" }]}
        >
          <Entypo name="cross" size={50} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioCallScreen;

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 60,
    backgroundColor: "#02BC49",
    alignItems: "center",
    justifyContent: "center",
  },
});
