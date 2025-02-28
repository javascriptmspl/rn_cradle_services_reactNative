import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SmallText10, SmallText10B } from "../../components/MyText";
import AntDesign from "react-native-vector-icons/AntDesign";
import PrimaryBtn from "../../components/PrimaryBtn";

const Reviews = () => {
  return (
    <View>
        {/* {Review 1} */}
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={styles.dp}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU",
            }}
          />
          <View>
            <SmallText10B bold>Conrad Duncan</SmallText10B>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <AntDesign name="star" size={10} color="orange" />
              <SmallText10>4.5</SmallText10>
            </View>
          </View>
        </View>
        <SmallText10 style={{marginTop:10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </SmallText10>
      </View>
      {/* {Review 2} */}
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            style={styles.dp}
            source={{
              uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid",
            }}
          />
          <View>
            <SmallText10B bold>Conrad Duncan</SmallText10B>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <AntDesign name="star" size={10} color="orange" />
              <SmallText10>4.5</SmallText10>
            </View>
          </View>
        </View>
        <SmallText10 style={{marginTop:10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </SmallText10>
      </View>
      <PrimaryBtn containerStyle={{marginTop:30, marginBottom:15}} text="Book Now"/>
    </View>
  );
};

export default Reviews;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    marginTop: 15,
    backgroundColor: "white",
  },
  dp: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});
